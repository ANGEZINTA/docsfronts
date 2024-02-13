# Durées
Il s'agit de la durée écoulée entre le début et la fin de la souscription.

Ici, il est possible de définir une échéance en fonction du montant versé lors de l'inscription du client. Vous trouverez des boutons "Créer" et "Modifier" pour cela.

*
![Alt text](/public/durees.png)

*

![Alt text](/public/creer_durer.png)

*

````template
    <div class="btn-sm btn btn-primary ms-5" v-b-modal="'durationModal'">
                        <i class="fad fa-plus"></i>
                        {{ trans('Créer') }}
    </div>
````

*
![Alt text](/public/editer_durer.png)

*

````template
< <div class="btn btn-xs btn-icon btn-warning" @click="setduration(duration)">
        <i class="fad fa-edit"></i>
</div>
````


