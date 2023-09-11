import React from 'react';
import './Home.css';
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>

            <Link to="/productos">
                Productos
            </Link>
            <br/>
            {/* <Link to="#seccion">

                Seccion
            </Link> */}
            <HashLink smooth to="/#seccion">
                Seccion 
            </HashLink>

            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dolorum tempore? Reiciendis tempore aspernatur voluptatibus laudantium esse sunt aliquam, et cumque sequi dolorem nam inventore minus sapiente id numquam enim?
            Nihil, doloribus asperiores recusandae, maiores veritatis ratione accusantium quod aut modi, quaerat tenetur! Aut vitae sunt tenetur, doloremque dolore nihil officiis molestiae. Molestiae sapiente similique ipsam culpa saepe, iure nobis?
            Aliquam quam praesentium exercitationem. Ullam voluptates, commodi nesciunt dolorem possimus harum mollitia qui ipsam tenetur vero distinctio a necessitatibus vitae beatae aspernatur esse alias numquam autem ea facere veniam sunt.</p>
            </div>

            <br/>

            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dolorum tempore? Reiciendis tempore aspernatur voluptatibus laudantium esse sunt aliquam, et cumque sequi dolorem nam inventore minus sapiente id numquam enim?
            Nihil, doloribus asperiores recusandae, maiores veritatis ratione accusantium quod aut modi, quaerat tenetur! Aut vitae sunt tenetur, doloremque dolore nihil officiis molestiae. Molestiae sapiente similique ipsam culpa saepe, iure nobis?
            Aliquam quam praesentium exercitationem. Ullam voluptates, commodi nesciunt dolorem possimus harum mollitia qui ipsam tenetur vero distinctio a necessitatibus vitae beatae aspernatur esse alias numquam autem ea facere veniam sunt.</p>
            </div>

            <br/>

            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dolorum tempore? Reiciendis tempore aspernatur voluptatibus laudantium esse sunt aliquam, et cumque sequi dolorem nam inventore minus sapiente id numquam enim?
            Nihil, doloribus asperiores recusandae, maiores veritatis ratione accusantium quod aut modi, quaerat tenetur! Aut vitae sunt tenetur, doloremque dolore nihil officiis molestiae. Molestiae sapiente similique ipsam culpa saepe, iure nobis?
            Aliquam quam praesentium exercitationem. Ullam voluptates, commodi nesciunt dolorem possimus harum mollitia qui ipsam tenetur vero distinctio a necessitatibus vitae beatae aspernatur esse alias numquam autem ea facere veniam sunt.</p>
            </div>

            <br/>
            
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dolorum tempore? Reiciendis tempore aspernatur voluptatibus laudantium esse sunt aliquam, et cumque sequi dolorem nam inventore minus sapiente id numquam enim?
            Nihil, doloribus asperiores recusandae, maiores veritatis ratione accusantium quod aut modi, quaerat tenetur! Aut vitae sunt tenetur, doloremque dolore nihil officiis molestiae. Molestiae sapiente similique ipsam culpa saepe, iure nobis?
            Aliquam quam praesentium exercitationem. Ullam voluptates, commodi nesciunt dolorem possimus harum mollitia qui ipsam tenetur vero distinctio a necessitatibus vitae beatae aspernatur esse alias numquam autem ea facere veniam sunt.</p>
            </div>

            <br/>

            <div id="seccion">
                <HashLink smooth to="/#top">
                    Subir 
                </HashLink>

                <h2>seccion</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa odio possimus et illum optio quae molestias quaerat eveniet quia, id doloremque sit harum obcaecati libero veritatis voluptas! Quasi, nesciunt.
                Iure neque unde doloremque fugit reprehenderit libero quis nulla, sit accusamus hic praesentium nemo a aliquam fugiat facere corrupti enim temporibus cumque? Recusandae soluta, quod rem consequatur tenetur neque consequuntur.
                Mollitia quibusdam, necessitatibus reiciendis fugit impedit odit asperiores fugiat earum doloremque. Maxime at, eos laudantium illo rem pariatur veritatis? Totam nisi porro ea pariatur ratione nam quasi officia quibusdam beatae!
                Culpa reiciendis voluptate sed iure non, corporis eius quo unde placeat. Saepe, error? Numquam, vel repudiandae corrupti est assumenda consequuntur corporis. Illo aspernatur ea corrupti blanditiis dicta magni eaque voluptatibus?
                In cupiditate, vel veniam illo facilis nostrum tenetur deserunt suscipit repellat dolorem labore, omnis esse eaque consequuntur, quos corrupti a blanditiis tempore voluptatum voluptates possimus atque. Fugiat blanditiis consequuntur tenetur.
                Quo incidunt eaque esse laborum itaque, ab reiciendis in provident alias hic aspernatur ex modi officia cupiditate voluptatibus fugiat possimus neque accusamus facere? Reiciendis optio id culpa placeat maiores error?
                Error non fuga alias atque laboriosam mollitia eveniet, fugit quos doloremque dolores eaque repudiandae maxime molestias ipsam. Magnam cum pariatur nihil necessitatibus iusto ducimus reprehenderit suscipit architecto, totam perspiciatis harum.
                Similique omnis iusto assumenda incidunt iste maxime labore ullam vitae aut tempora debitis eveniet nam eligendi earum voluptates totam, ut quos exercitationem cum sapiente in. Dignissimos vel ipsam accusamus autem!
                Est fugiat sunt eaque esse illo officiis magni dicta, mollitia veritatis ipsam aliquam blanditiis nemo, quisquam dolorum sapiente error accusamus quis molestiae corporis debitis harum delectus, cumque pariatur unde. Exercitationem.
                Dolores libero quo dolor pariatur eaque, repellendus maxime. Dolor eaque quasi nam nemo repellendus iure error quidem, maxime distinctio, enim sunt laudantium adipisci odit quos? Consectetur, fuga exercitationem! Neque, facilis!

                
            </div>
          

            
        </div>
    )
}

export { Home }