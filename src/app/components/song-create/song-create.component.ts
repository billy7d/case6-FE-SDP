import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css'],
})
export class SongCreateComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  songs: any = [];
  song: any = {
    name: '',
    album: '',
    author: '',
    creator:'',
    musicType: '',
    description:'',
    link: '',
  };

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  showButton: boolean = true;

  ngOnInit(): void {
    this.getAllSong();
  }

  getAllSong() {
    this.httpClient.get('http://localhost:8080/songs').subscribe((res) => {
      this.songs = res;
    });
  }

  //Gets called when the user clicks on submit to upload the image
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.selectedFile.name
    );
    //Make a call to the Spring Boot Application to save the image
    this.httpClient
      .post('http://localhost:8080/songs/uploadmp3', uploadImageData, {
        observe: 'response',
      })
      .subscribe((res) => {
        if (res.status === 200) {
          debugger;
          this.song.link = res.body.linkMp3;
          this.showButton = false;
        }
      }),((err) =>{});
  }

  createSong() {
    this.httpClient
      .post('http://localhost:8080/songs/create', this.song)
      .subscribe((res) => {
        debugger;
        this.getAllSong();
      });
  }
}
