# Methode de paiement
Ici, nous disposons de toutes les méthodes de paiement possibles utilisées par l'application, que nous pouvons également créer.

*

######

![Alt text](/public/methode_paiement.png)

*

### avec un bouton :

*

![Alt text](/public/creer_methode_paiement.png)

*

```template
 <div class="d-flex align-items-center py-1">
            <div @click="edit" class="btn-sm btn btn-danger ms-5" v-b-modal="'paymentMethodModal'">
              <i class="fad fa-plus"></i>
              {{ trans('Créer') }}
            </div>

          </div>


```

