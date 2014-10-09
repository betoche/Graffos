package com.graffos.site.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLOpenShiftConnection {
	private Connection con = null;
	
	public MySQLOpenShiftConnection() {
	}
	
	public Connection getConnection() throws ClassNotFoundException, SQLException {
		if( con == null ) {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection( "jdbc:mysql://127.4.131.2:3306/graffos?user=admin5y9r6C5&password=mkPFQaXyKtIx" );
		}
		return con;
	}
}
