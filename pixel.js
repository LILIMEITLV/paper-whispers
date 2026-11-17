// Meta pixel for every Paper Whispers page. Skipped on local previews so test
// opens never pollute the ad data; pwTrack is then a no-op.
(function () {
  var h = location.hostname;
  var isLocal = location.protocol === 'file:' || h === 'localhost' || h === '127.0.0.1' || h === '';
  window.pwTrack = function () {};
  if (isLocal) return;

  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1433857244466235');
  fbq('track', 'PageView');
  window.pwTrack = function () { fbq.apply(null, arguments); };
})();
