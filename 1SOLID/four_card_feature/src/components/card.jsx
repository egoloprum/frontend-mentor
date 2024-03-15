export default function card(props) {
   return (
      <div class={ props.data.class }>
         <h2 class="card__title">{ props.data.title }</h2>
         <p>{ props.data.body }</p>
         <img class="card__img" src={ props.data.image } alt="" />
      </div>
   )
}
