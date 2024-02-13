# Utilisateurs
Tous les utilisateurs de l'application sont enregistrés ici.

*

![Alt text](/public/utilisateurs.png)

*

![Alt text](/public/enregistrer_utilisateurs.png)

*

```template
<button class="btn btn-primary btn-sm ms-3" v-b-modal="'userModal'" @click="createUser">
                        <i class="fad fa-plus"></i>
                        {{ trans('Créer un utilisateur') }}
</button>


```

