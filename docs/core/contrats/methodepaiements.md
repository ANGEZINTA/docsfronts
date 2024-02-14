# Méthodes de paiements
Dans cet espace nous retrouvons toutes les méthodes de paiement  proposées par l'application. Nous avons également la posssibilité d'en ajouter si besoin.

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

