import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private stories = new Array<any>();

    constructor(
        public navCtrl: NavController) {

        let storyItem1 = {
            userPicture: "https://superbeal.com.br/img/news/cafe_man_5a6f012b1671f.jpg",
            userId: 1,
            userName: "Café da Manhã",
            currentItem: 0,
            items: [{
                date: "há 10 minutos",
                duration: "5",
                id: "3",
                media: "https://www.pacoteshyatt.com.br/wp-content/uploads/2013/04/CAFE-DA-MANHA-1-1536x1152.jpg",
                seen: false,
                type: "0",
                views: 5
            }],
            seen: false
        };

        let storyItem2 = {
            userPicture: "https://diaonline.ig.com.br/wp-content/uploads/2019/11/restaurante-aguas-lindas_capa-e1574963006966-1024x623.jpg",
            userId: 2,
            userName: "Almoço",
            currentItem: 0,
            items: [{
                date: "há 20 minutos",
                duration: "7",
                id: "3",
                media: "https://www.pacoteshyatt.com.br/wp-content/uploads/2013/04/CAFE-DA-MANHA-1-1536x1152.jpg",
                seen: false,
                type: "0",
                views: 5
            }],
            seen: false
        };

        let storyItem3 = {
            userPicture: "https://missfit.blog.br/wp-content/uploads/2014/07/cuscuz2.jpg",
            userId: 3,
            userName: "Jantar",
            currentItem: 0,
            items: [{
                date: "há 30 minutos",
                duration: "10",
                id: "3",
                media: "https://www.pacoteshyatt.com.br/wp-content/uploads/2013/04/CAFE-DA-MANHA-1-1536x1152.jpg",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: false
        };

        let storyItem4 = {
            userPicture: "https://33622.cdn.simplo7.net/static/33622/sku/tecidos-tecido-tricoline-preto-lanches--p-1618578682715.jpg",
            userId: 4,
            userName: "Lanches",
            currentItem: 0,
            items: [{
                date: "há 40 minutos",
                duration: "12",
                id: "3",
                media: "https://www.pacoteshyatt.com.br/wp-content/uploads/2013/04/CAFE-DA-MANHA-1-1536x1152.jpg",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: true
        };

        let storyItem5 = {
            userPicture: "https://blog.centraldaslareiras.com.br/wp-content/uploads/2016/06/Bebidas.jpg",
            userId: 4,
            userName: "Bebidas",
            currentItem: 0,
            items: [{
                date: "há 40 minutos",
                duration: "12",
                id: "3",
                media: "https://www.pacoteshyatt.com.br/wp-content/uploads/2013/04/CAFE-DA-MANHA-1-1536x1152.jpg",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: true
        };

        let storyItem6 = {
            userPicture: "https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg",
            userId: 4,
            userName: "Pizza",
            currentItem: 0,
            items: [{
                date: "há 40 minutos",
                duration: "12",
                id: "3",
                media: "https://www.pacoteshyatt.com.br/wp-content/uploads/2013/04/CAFE-DA-MANHA-1-1536x1152.jpg",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: true
        };

        let storyItem7 = {
            userPicture: "https://static1.conquistesuavida.com.br/articles//5/10/83/5/@/29327-sucos-funcionais-extraem-o-melhor-das-fr-article_block_media-2.jpg",
            userId: 4,
            userName: "Sucos",
            currentItem: 0,
            items: [{
                date: "há 40 minutos",
                duration: "12",
                id: "3",
                media: "https://www.pacoteshyatt.com.br/wp-content/uploads/2013/04/CAFE-DA-MANHA-1-1536x1152.jpg",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: true
        };

        this.stories.push(storyItem1);
        this.stories.push(storyItem2);
        this.stories.push(storyItem3);
        this.stories.push(storyItem4);
        this.stories.push(storyItem5);
        this.stories.push(storyItem6);
        this.stories.push(storyItem7);


        this.reorderStories();

    }

    reorderStories() {
        this.stories.sort((a, b) => {
            if (a.seen) return 1;
            if (b.seen) return -1;

            return 0;
        });
    }

}
