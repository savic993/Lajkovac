<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="stil.css"/>
			</head>
			<body>
				<table border="1" class="tabela">
					<tr>
						<th>RB</th>
						<th>Naselje</th>
						<th>Broj stanovnika</th>
						<th>Godina popisa</th>
					</tr>
					<xsl:for-each select="naselja/naselje">
						<xsl:sort select="naziv"/>
						<xsl:choose>
							<xsl:when test="godinaPopisa=2011">
								<tr bgcolor="green">
									<td><xsl:value-of select="position()"/></td>
									<td><xsl:value-of select="naziv"/></td>
									<td><xsl:value-of select="brStanovnika"/></td>
									<td><xsl:value-of select="godinaPopisa"/></td>
								</tr>
							</xsl:when>
							<xsl:otherwise>
								<tr bgcolor="red">
									<td><xsl:value-of select="position()"/></td>
									<td><xsl:value-of select="naziv"/></td>
									<td><xsl:value-of select="brStanovnika"/></td>
									<td><xsl:value-of select="godinaPopisa"/></td>
								</tr>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>