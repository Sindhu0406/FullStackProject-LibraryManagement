package com.example.demo.model;

	import jakarta.persistence.Column;
	import org.hibernate.annotations.DynamicUpdate;

	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.Table;
	import jakarta.persistence.JoinColumn;
	import jakarta.persistence.JoinTable;
	import jakarta.persistence.OneToMany;
	import jakarta.persistence.CascadeType;
	import java.util.ArrayList;
	import java.util.List;

	import org.hibernate.annotations.DynamicUpdate;

	@Entity //Class name should be created by table name.
	@DynamicUpdate 
	@Table(name = "library") 
	public class Library {

		// attributes--->column name of the table
			@Id // primary key of the table
			@GeneratedValue(strategy = GenerationType.IDENTITY)
			@Column(name = "BookId",length=4)
			private Integer bookId;
			//Colunm name of the table..
			@Column(name = "DeptId",length=10,nullable = false)
			private Integer deptId;
			@Column(name = "DeptName",length=10,nullable = false)
			private String deptName;

			@Column(name = "BookName",length=20, nullable = false)
			private String bookName;

			@Column(name = "AuthorName",length=20, nullable = false)
			private String authorName;

			

			@Column(name = "Edition", nullable = false)
			private Integer edition;

			@Column(name = "NoOfCopies", nullable = false)
			private Integer noOfCopies;
			
			
			
			
			
			
					public Library(){
				
			}
			public Library(Integer bookId,Integer deptId,String deptName,String bookName,String authorName,Integer edition ,Integer noOfCopies ) {
				super();
				this.bookId=bookId;
				this.deptId=deptId;
				this.deptName= deptName;
				this.bookName=bookName;
				this.authorName=authorName;
				
				this.edition=edition;
				this.noOfCopies=noOfCopies;
			}
			// public getters and setters for the above mentioned attributes
			public  Integer getBookId() {
				return bookId;
			}
			public void setBookId(Integer bookId) {
				this.bookId = bookId;
			}
			
			public Integer getDeptId() {
				return deptId;
			}
			public void setDeptId(Integer deptId) {
				this.deptId = deptId;
			}
			public  String getDeptName() {
				return deptName;
			}
			public void setDeptName(String deptName) {
				this.deptName = deptName;
			}
			
			public void setJournalId(Integer journalId) {
				this.bookId = journalId;
			}
			
			public String getBookName() {
				return bookName;
			}
			public void setBookName(String bookName) {
				this.bookName = bookName;
			}
			
			public String getAuthorName() {
				return authorName;
			}
			public void setAuthorName(String authorName) {
				this.authorName = authorName;
			}
			
		
			public Integer getEdition() {
				return edition;
			}
			public void setEdition(Integer edition) {
				this.edition = edition;
			}
			
			public Integer getNoOfCopies() {
				return noOfCopies;
			}
			public void setNoOfCopies(Integer noOfCopies) {
				this.noOfCopies = noOfCopies;
			}

		}




