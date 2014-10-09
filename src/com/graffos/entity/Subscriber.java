package com.graffos.entity;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.graffos.site.util.MySQLOpenShiftConnection;

public class Subscriber {
	private int id = 0;
	private String email = "";
	private String ip = "";
	private Date timestamp = null;
	private boolean enabled = false;
	
	public Subscriber() {
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public Date getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	public boolean create() throws ClassNotFoundException, SQLException {
		boolean success = false;
		
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		MySQLOpenShiftConnection openShift = new MySQLOpenShiftConnection();
		
		try {
			String sql = "INSERT INTO `graffos`.`subscriber` SET email=?, ip=?, timestamp=?, enabled=?";
			
			con = openShift.getConnection();
			ps = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
			ps.setString( 1, getEmail() );
			ps.setString( 2, getIp() );
			ps.setString( 3, (new SimpleDateFormat( "yyyy-MM-dd HH:mm" )).format( getTimestamp() ) );
			ps.setBoolean( 4, true );
			
			if( ps.executeUpdate()>0 ) {
				rs = ps.getGeneratedKeys();
				if( rs.next() ) {
					setId( rs.getInt(1) );
					success = true;
				}
			}
		} finally {
			try{ rs.close(); }catch(Exception e) {e.printStackTrace();}
			try{ ps.close(); }catch(Exception e) {e.printStackTrace();}
			try{ con.close(); }catch(Exception e) {e.printStackTrace();}
		}
		
		return success;
	}
}
