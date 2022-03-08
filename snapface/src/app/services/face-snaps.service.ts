import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[]=[
        {
          id: 1,
              title:"Mimi l'aventurière",
              description:"L'aventure c'est extra!",
              imageUrl:'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/68382623_10162292093185088_6005457812841299968_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Wh1xSDrQcxkAX_7OdY_&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_LxETx1Ez4rcUytIlUIBoK2XOpN-eR1iO_g5C8jRca5A&oe=6245E708',
              createdDate: new Date(),
              snaps: 0,
              location: 'Vallée de la mort',
            },
        {
          id: 2,
              title:'Calme bassin',
              description:'Journée bateau sur le bassin !',
              imageUrl:'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/54727906_10161681352030088_3038583297702625280_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=lIaoaY4jL0oAX_BQWVD&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_LCVuih9SAbU-DLCsovKjP7DIXzDV2U-4ImIymU2roFQ&oe=62478559',
              createdDate: new Date(),
              snaps: 0
            },
        {
          id: 3,
              title:'chute du niaggara',
              description: "Tellement d'eau !",
              imageUrl:'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/68566710_10162275054380088_4133172197172707328_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ri32zNlE3HIAX8Wh1UP&_nc_ht=scontent-cdg2-1.xx&oh=00_AT8Xbs1Zb9TGN_E3arBbg_4xAonYxEVUK2Ca8szabFgPkg&oe=62477EF4',
              createdDate: new Date(),
              snaps: 0,
              location: 'Canada',
            },
            {
              id: 4,
              title:'Django',
              description:'Un gros Bulldog!',
              imageUrl:'https://toutchien.fr/wp-content/uploads/2019/07/Le-bulldog-anglais.jpg',
              createdDate: new Date(),
              snaps: 0,
              location: 'paris',
            },
        
            ];
            getAllFaceSnaps(): FaceSnap[] {
              return this.faceSnaps;
          }
          getFaceSnapById(faceSnapId: number): FaceSnap {
            const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
            if (!faceSnap) {
                throw new Error('FaceSnap not found!');
            } else {
                return faceSnap;
            }
          }
           
          snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
            const faceSnap = this.getFaceSnapById(faceSnapId);
            snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        }

}