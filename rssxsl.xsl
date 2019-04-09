<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="xmlcss.css"/>
			</head>
			<body>
				<table class="tabela">
					<tr>
						<th>Naslov</th>
						<th>Opis</th>
						<th>Link</th>
					</tr>
					<xsl:for-each select="rss/channel/item">
						<xsl:sort select="title"/>
							<tr>
								<td><xsl:value-of select="title"/></td>
								<td><xsl:value-of select="description"/></td>
								<td><xsl:value-of select="link"/></td>
							</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>