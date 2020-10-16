import { Component, OnInit } from '@angular/core';
//import {Property} from './Property'
import { CaseService } from 'src/app/case.service';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';  
import { Property } from '../Property';
import {Commonmodel} from 'src/app/models/commonmodel';
import { ErrorService } from '../error.service';
@Component({
  selector: 'app-caseone',
  templateUrl: './caseone.component.html',
  styleUrls: ['./caseone.component.css']
})
export class CaseoneComponent implements OnInit {
  page:number = 4;
  loginForm: FormGroup;
  submitted = false;
  errorMsg: any;
  columnData: Commonmodel[];


  constructor(private caseService: CaseService, 
    private readonly _errorService: ErrorService) { }

  ngOnInit(): void {
  }
  title = 'CaseStudy';


  // storeData: any; 
  // str: String;
  // fileUploaded: File;  
  // worksheet: any;  
  // property: any[][];
  // uploadedFile(event) {  
  //   this.fileUploaded = event.target.files[0];  
  //   this.readExcel();  
  // }  
  // readExcel() {  
  //   console.log("test");
  //   let readFile = new FileReader();  
  //   readFile.onload = (e) => {  
  //     this.storeData = readFile.result;  
  //     var data = new Uint8Array(this.storeData);  
  //     var arr = new Array();  
  //     for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);  
  //     var bstr = arr.join("");  
  //     var workbook = XLSX.read(bstr, { type: "binary" });  
  //     var first_sheet_name = workbook.SheetNames[0];  
  //     this.worksheet = workbook.Sheets[first_sheet_name];
      
  //    // console.log(XLSX.utils.sheet_to_json(this.worksheet, { raw: true }));
  //    this.property=  XLSX.utils.sheet_to_json(this.worksheet, { raw: true });
  //    console.log( this.property[0]);
  //    //console.log(this.property);
     
  //   //  this.str= JSON.stringify(this.property);
  //   //  this.caseService.postExcelData(this.property).subscribe();
  //     //console.log(XLSX.utils.sheet_to_html(this.worksheet));  
  //   }  
  //   readFile.readAsArrayBuffer(this.fileUploaded); 

  // }  
  data: any ;
  dataString: string;
  property:Property[];
  
  
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
      this.caseService.postExcelData(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }


  onFileChangeNew(ev) {
    let workBook = null;
    let jsonData = null;
    
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.dataString = JSON.stringify(jsonData);
     //console.log(dataString);
      //this.setDownload(dataString);
      //this.caseService.postExcelData(this.dataString).subscribe(data=>{this.property=data;
        //  console.log(this.property[1].Loan_No);
        // });
     
    }
    reader.readAsBinaryString(file);
  }
  postData(){
    
    if(this.dataString){
      this.columnData=[];//"Loan","Borrower","DOB","Address","Cost","Flood Risk"];
      this.caseService.postExcelData(this.dataString).subscribe(
          data=>{this.property=data;
            var borrower : boolean = false;
            var loan : boolean = false;
            var cost : boolean = false;
            var dob : boolean = false;
            var flood : boolean = false;
            var address : boolean = false;
            this.property.forEach(element => {
              if(element['Borrower Name']){
                borrower = true;
              }
              if(element['Loan No']){
                loan = true;
              }
              if(element['Cost']){
                cost =true;
              }
              if(element['DOB']){
                dob=true;
              }
              if(element['Prop Address']){
                address=true;
              }
              if(element['Flood Risk']){
                flood=true;
              }
            });
            if(loan){
              var model: Commonmodel = new Commonmodel();
              model.Text='Loan';
              model.Value = 'Loan No';
              this.columnData.push(model);
            }
            if(borrower){
              var model: Commonmodel = new Commonmodel();
              model.Text='Borrower';
              model.Value = 'Borrower Name';
              this.columnData.push(model);
            }
            if(dob){
              var model: Commonmodel = new Commonmodel();
              model.Text='DOB';
              model.Value = 'DOB';
              this.columnData.push(model);
            }
            if(address){
              var model: Commonmodel = new Commonmodel();
              model.Text='Address';
              model.Value = 'Prop Address';
              this.columnData.push(model);
            }
            if(cost){
              var model: Commonmodel = new Commonmodel();

              model.Text='Cost';
              model.Value = 'Cost';
              this.columnData.push(model);
            }
            if(flood){
              var model: Commonmodel = new Commonmodel();

              model.Text='Flood Risk';
              model.Value = 'Flood Risk';
              this.columnData.push(model);
            }
      },(error) => {
        this._errorService.error(error);
        this.errorMsg = error; 
      },);
    }
  }

}
