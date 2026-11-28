// Click tracking for Flaux client sites (same file on every site; D-27 in flaux-surface).
// Sends a GA4 event when a visitor taps a call, WhatsApp, directions or booking link, so we can show
// real enquiries, not just visits. Needs the site's gtag snippet; does nothing without it.
(function () {
  var RULES = [
    ["call_click", /^tel:/i],
    ["whatsapp_click", /(wa\.me|whatsapp\.com)/i],
    ["directions_click", /(google\.[a-z.]+\/maps|maps\.google\.|maps\.app\.goo\.gl|goo\.gl\/maps)/i],
    ["reserve_click", /(reservego|wegsoft|eazydiner|dineout|swiggy\.com\/dineout)/i],
  ];
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a || typeof window.gtag !== "function") return;
    for (var i = 0; i < RULES.length; i++) {
      if (RULES[i][1].test(a.href)) {
        // beacon: the event still sends when the tap opens the dialler or leaves the page.
        window.gtag("event", RULES[i][0], { link_url: a.href, page_path: location.pathname, transport_type: "beacon" });
        return;
      }
    }
  }, true);
})();
