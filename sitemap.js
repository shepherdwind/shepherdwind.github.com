function generate_xml_sitemap(urls) {
  // this is the source of the URLs on your site, in this case we use a simple array, actually it could come from the database
  // the root of your website - the protocol and the domain name with a trailing slash
  var root_path = 'http://git.shepherdwind.com/';
  // XML sitemap generation starts here
  var priority = 0.5;
  var freq = 'monthly';
  var xml = '<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="http://shepherdwind.com/wp-content/plugins/google-sitemap-generator/sitemap.xsl"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  for (var i in urls) {
    xml += '<url>';
    xml += '<loc>'+ root_path + urls[i] + '</loc>';
    xml += '<changefreq>'+ freq +'</changefreq>';
    xml += '<priority>'+ priority +'</priority>';
    xml += '</url>';
    i++;
  }
  xml += '</urlset>';
  return xml;
}

var fs = require('fs');
fs.readdir('./', function(err, path){
  var xml = '';
  var files = [];
  path.forEach(function(file){
    if (~(file.indexOf('.html'))){
      files.push(file);
    }
  });
  xml = generate_xml_sitemap(files);
  fs.writeFileSync('sitemap.xml', xml);
  console.log('sitemap.xml creat successful');
});
