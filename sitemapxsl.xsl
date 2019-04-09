<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.sitemaps.org/schemas/sitemap/0.9">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="xmlcss.css"/>
			</head>
			<body>
				<table class="tabela">
					<tr>
						<th>Lokacija</th>
						<th>Učestalost promena</th>
						<th>Prioritet</th>
					</tr>
					<xsl:for-each select="xs:urlset/xs:url">
						<xsl:sort select="xs:priority"/>
							<tr>
								<td><xsl:value-of select="xs:loc"/></td>
								<td><xsl:value-of select="xs:changefreq"/></td>
								<td><xsl:value-of select="xs:priority"/></td>
							</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>