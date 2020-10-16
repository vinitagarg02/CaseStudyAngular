import { Component } from '@angular/core';

// import {Property} from './Property'

// import * as XLSX from 'xlsx';  
// import * as FileSaver from 'file-saver'; 
 @Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
//   title = 'CaseStudy';
//   storeData: any; 
//   fileUploaded: File;  
//   worksheet: any;  
//   property: Property[];
//   uploadedFile(event) {  
//     this.fileUploaded = event.target.files[0];  
//     this.readExcel();  
//   }  
//   readExcel() {  
//     console.log("test");
//     let readFile = new FileReader();  
//     readFile.onload = (e) => {  
//       this.storeData = readFile.result;  
//       var data = new Uint8Array(this.storeData);  
//       var arr = new Array();  
//       for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);  
//       var bstr = arr.join("");  
//       var workbook = XLSX.read(bstr, { type: "binary" });  
//       var first_sheet_name = workbook.SheetNames[0];  
//       this.worksheet = workbook.Sheets[first_sheet_name];
      
//      // console.log(XLSX.utils.sheet_to_json(this.worksheet, { raw: true }));
//      this.property=  XLSX.utils.sheet_to_json(this.worksheet, { raw: true });
//      console.log(this.property);
//       //console.log(XLSX.utils.sheet_to_html(this.worksheet));  
//     }  
//     readFile.readAsArrayBuffer(this.fileUploaded);  
//   }  
 }
