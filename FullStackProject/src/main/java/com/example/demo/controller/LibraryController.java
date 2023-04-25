package com.example.demo.controller;
    import java.util.ArrayList;
    import java.util.HashMap;
	import java.util.List;
	import java.util.Map;
	import java.util.Scanner;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
	import org.springframework.web.bind.annotation.RequestParam;

	import com.example.demo.exceptionHandling.ResourceNotFoundException;
	import com.example.demo.model.Library;
	import com.example.demo.repository.LibraryRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@RestController//@ResponseBody and @Controller
	@RequestMapping("/RestAPIproject")
	public class LibraryController {

		@Autowired
		private LibraryRepository libraryRepository;
		private String name;
		
		/*@GetMapping("/books")
		public List<Library> getRecordsFromDb(){
			return libraryRepository.findAll();
		}*/		

		// create library books
		@PostMapping("/books")
		public Library createLibraryRecords(@RequestBody Library library) {
			return libraryRepository.save(library);
		}

		// get library  details by id.
		
		@GetMapping("/books/{BookId}")
		public ResponseEntity<Library> searchById(@PathVariable int BookId) {
			Library library = libraryRepository.findById(BookId)
					.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));
			return ResponseEntity.ok(library);
		}
		//get library records details by searching particular BookName.
		@GetMapping("/books")
		public ResponseEntity<List<Library>> getAllBooks(@RequestParam(required=false) String bookName){
		
			try {
				List<Library> bookList = new ArrayList<Library>();
				if(bookName!=null) {
					libraryRepository.findByBookNameContaining(bookName).forEach(bookList::add);
					return new ResponseEntity<> (bookList,HttpStatus.OK);
					
				}
				else {
					bookList=libraryRepository.findAll();
					return new ResponseEntity<>(bookList, HttpStatus.OK);
				}
			} catch(Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		// update library books details by using bookId.
		@PutMapping("/books/{BookId}")
		public ResponseEntity<Library> updateBookDetails(@PathVariable int BookId, @RequestBody Library libraryRecordDetails){
			Library library = libraryRepository.findById(BookId)
					.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));
 
			library.setAuthorName(libraryRecordDetails.getAuthorName());
			library.setBookName(libraryRecordDetails.getBookName());
			library.setDeptId(libraryRecordDetails.getDeptId());
			library.setDeptName(libraryRecordDetails.getDeptName());
			
			library.setEdition(libraryRecordDetails.getEdition());
			library.setNoOfCopies(libraryRecordDetails.getNoOfCopies());
			

			Library updatedRecords = libraryRepository.save(library);
			return ResponseEntity.ok(updatedRecords);
		}

		// delete library records by using bookId
		@DeleteMapping("/books/{BookId}")
		public ResponseEntity<Map<String, Boolean>> deleteRecord(@PathVariable int BookId){
			 Library library = libraryRepository.findById(BookId)
					.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));

			 libraryRepository.delete(library);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
        //Delete all the book records 
		@DeleteMapping("/books")
		public ResponseEntity<HttpStatus> deleteAllBooks() {
			try {
				libraryRepository.deleteAll();
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		//View particular department name(viewByEEE) by using department Id.
		@GetMapping("/books/viewByEEE")
		public ResponseEntity<List<Library>> viewEEE() { 
			try {
				List<Library> deptBookList=libraryRepository.findBydeptId(1);
				if(deptBookList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(deptBookList, HttpStatus.OK);
				}
			catch(Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
		}
		//View particular department name(viewByIT) by using department Id.
			@GetMapping("/books/viewByIT")
			public ResponseEntity<List<Library>> viewIT() { 
				try {
					List<Library> deptBookList=libraryRepository.findBydeptId(2);
					if(deptBookList.isEmpty()) {
						return new ResponseEntity<>(HttpStatus.NO_CONTENT);
					}
					return new ResponseEntity<>(deptBookList, HttpStatus.OK);
					}
				catch(Exception e) {
					return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
					}
		}
			//View particular department name(viewByCSE) by using department Id.
			@GetMapping("/books/viewByCSE")
			public ResponseEntity<List<Library>> viewCSE() { 
				try {
					List<Library> deptBookList=libraryRepository.findBydeptId(3);
					if(deptBookList.isEmpty()) {
						return new ResponseEntity<>(HttpStatus.NO_CONTENT);
					}
					return new ResponseEntity<>(deptBookList, HttpStatus.OK);
					}
				catch(Exception e) {
					return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
					}
		}
			//View particular department name(viewByMech) by using department Id.
			@GetMapping("/books/viewByMech")
			public ResponseEntity<List<Library>> viewMech() { 
				try {
					List<Library> deptBookList=libraryRepository.findBydeptId(4);
					if(deptBookList.isEmpty()) {
						return new ResponseEntity<>(HttpStatus.NO_CONTENT);
					}
					return new ResponseEntity<>(deptBookList, HttpStatus.OK);
					}
				catch(Exception e) {
					return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
					}
		}
	}


