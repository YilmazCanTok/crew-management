import { Injectable } from '@angular/core';
import { Certificate } from 'src/crew-certificate-dialog/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private certificateList: Certificate[] = [
    {
        id: 1,
        name: "Sertifika 1",
        link: "https://www.example.com/sertifika1",
        userId: 1
    },
    {
        id: 2,
        name: "Sertifika 2",
        link: "https://www.example.com/sertifika1",
        userId: 2
    },
    {
        id: 3,
        name: "Sertifika 3",
        link: "https://www.example.com/sertifika1",
        userId: 3
    },
    {
        id: 4,
        name: "Sertifika 4",
        link: "https://www.example.com/sertifika1",
        userId: 4
    },
    {
        id: 5,
        name: "Sertifika 5",
        link: "https://www.example.com/sertifika1",
        userId: 5
    },
    {
      id: 6,
      name: "Sertifika 1",
      link: "https://www.example.com/sertifika1",
      userId: 1
  },
  {
      id: 7,
      name: "Sertifika 2",
      link: "https://www.example.com/sertifika1",
      userId: 2
  },
  {
      id: 8,
      name: "Sertifika 3",
      link: "https://www.example.com/sertifika1",
      userId: 3
  },
  {
      id: 9,
      name: "Sertifika 4",
      link: "https://www.example.com/sertifika1",
      userId: 4
  },
  {
      id: 10,
      name: "Sertifika 5",
      link: "https://www.example.com/sertifika1",
      userId: 5
  },
  ];

  getCertificatesByUserId(userId: number) {
    const filteredList = this.certificateList.filter(c => c.userId === userId)
    return filteredList
  }
}