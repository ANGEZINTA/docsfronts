# Prise de contact

Nous allons enregistrer ici différentes informations sur le premier rendez-vous avec le client et le planifier.


*

![Alt text](/public/prise_contact.png)


*

![Alt text](/public/effectuer_prise_contact.png)

*

````template

<router-link :to="{ name: 'handshake-form' }" class="btn btn-sm btn-primary">
        <i class="fad fa-headset"></i> {{ trans('Effectuer une prise de contact') }}
</router-link>

 
````

*

![Alt text](/public/programmer_prise_contact.png)

*

````template

 <div class="btn btn-sm btn-warning me-2">
        <i class="fad fa-calendar-alt color-inherit"></i>
        {{trans('Programmer une prise de contact')}}
</div>


````

