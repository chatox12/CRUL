import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare var $;


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {


  title = 'app';
  dataArray:any = {};

//valor para insertar
  valor_ocacion:boolean = false;




//valores para realizar actualizaciones
  id: string;
  nombre: string;
  constructor(public http: HttpClient){

    console.log("Hello fellow user");

    this.LoadTableData();

    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },3000);
  }

  search(term: string) {


    }

    function_add(term : string): void{
      //si el valor ingresado por el usuario es nula arroja la excepcion
      if(term.length == 0){
        console.log("valor vacio");
        this.valor_ocacion = true;
      }
      //de lo contrario continua normalmente
      else{

      const params = new HttpParams()
      .set('nombre', term);

console.log('post '+ params);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

      this.http.post('http://localhost/api/ocacion',params ,{headers: headers})
        .subscribe(
          res => {
            console.log(res);
            term = '';
          },
          err => {
            console.log("Error occured");
          }
        );

        }

    }

    LoadTableData(){
      this.http.get('http://localhost/api/ocacion/1').subscribe(data => {
        this.dataArray = data;
        console.log(this.dataArray);
      });
    }

    function_put(){
            const paramsput = new HttpParams()
            .set('nombre', ' nuevo angular');

            console.log(""+paramsput)

            console.log(httpOptions.headers);
            this.http.put('http://localhost/api/ocacion/4',paramsput,httpOptions)
              .subscribe(
                res => {
                  console.log(res);
                },
                err => {
                  console.log(err);
                }
              );
    }

    submitimg(img: string){
      alert("funcion nueva"+img);
    }

    function_delete(){
                  let headers = new HttpHeaders()
                  .set('Content-Type', 'application/x-www-form-urlencoded');

                  this.http.delete('http://localhost/api/ocacion/8')
                    .subscribe(
                      res => {
                        console.log(res);
                      },
                      err => {
                        console.log("Error occured");
                      }
                    );
    }
  ngOnInit(): void {}







}
