package com.graffos.site.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.graffos.entity.Subscriber;

/**
 * Servlet implementation class SubscriptionServlet
 */
public class SubscriptionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SubscriptionServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter( "email" );
		String ipAddress = request.getRemoteAddr();
		Calendar cal = Calendar.getInstance();
		
		Subscriber subscriber = new Subscriber();
		subscriber.setEmail( email );
		subscriber.setEnabled(true);
		subscriber.setIp(ipAddress);
		subscriber.setTimestamp( cal.getTime() );
		
		try {
			if( subscriber.create() ) {
				response.addHeader("Access-Control-Allow-Origin", "*");
				PrintWriter out = response.getWriter();
				out.write( String.valueOf( "id: " + subscriber.getId() ) );
				out.flush();
				out.close();
			} else {
				throw new ServletException( "An error ocurred while trying to add the subscriber to the database." );
			}
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			throw new ServletException( e );
		}
		
	}
	
	public class GraffosException extends Exception {
		public GraffosException(){}
		
		public GraffosException( String message ) {
			super(message);
		}
	}

}
