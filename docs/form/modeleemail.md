# Modèle email

Ici, nous avons la possibilité de créer différents types d'e-mails pour les clients.

*

![Alt text](/public/modele_email.png)

*

![Alt text](/public/creer_modele_email.png)

*

```template

<div class="d-flex align-items-center py-1">
    <router-link :to="{name:'email-template-form'}" class="btn-sm btn btn-primary ms-5">
        <i class="fad fa-plus"></i>
        {{ trans('Créer') }}
    </router-link>

</div>

```