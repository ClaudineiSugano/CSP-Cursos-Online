// source --> https://cspcursos.online/wp-content/plugins/buddypress/bp-core/js/jquery-query.min.js 
function bp_get_querystring(n){var t=location.search.split(n+"=")[1];return t?decodeURIComponent(t.split("&")[0]):null};