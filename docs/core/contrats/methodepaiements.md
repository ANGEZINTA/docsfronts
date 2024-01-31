# Methode de paiement

On a tout simplement ici tout les methodes de paiement possible utiliser par l'application qu'on peut creer.

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

