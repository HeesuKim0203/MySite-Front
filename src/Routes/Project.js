import { useEffect, useState } from 'react';
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { Scene, PerspectiveCamera, Group } from 'three' ;
import { CSS3DRenderer, CSS3DObject } from '../../node_modules/three/examples/jsm/renderers/CSS3DRenderer.js' ;
import { TrackballControls } from '../../node_modules/three/examples/jsm/controls/TrackballControls'

import { axiosApi } from '../Util/api' ;
import { size } from '../Util/theme'
import { language } from '../Util/util' ;
import ProjectContent from '../Components/Project/ProjectContent' ;

const Container = styled.div`
    width : 70% ;
    margin : 0 auto ;
    @media ${props => props.theme.laptop} {
        width : 90% ;
    }
    @media ${props => props.theme.mobileL} {
        width : 100% ;
    }
`;

const ContentContainer = styled.div`
    width : 100% ;
    display : grid ;
    
    grid-template-columns : repeat(2, 50%) ;
    grid-row-gap : 30px ;
    @media ${props => props.theme.tabletS} {
        grid-template-columns : repeat(1, 100%) ;
    }
`;


const Container3D = styled.div`

    display : block ;
    width : 80% ;

    display : flex ;

    align-items : center ;
    justify-content : center ;

    position : relative ;

    margin : 0 auto ;
`;

const Button = styled.div`
  all : unset ;
  
  width : 25px ;
  height : 80px ;

  background-image : url(${props => props.image}) ;
  background-size : cover ;
  
  position : absolute ;
  
  left : 50% - 15px ;
  top : 50% - 15px ;
  z-index : 20 ;
`;

const ProjectContentContainer = styled.div`
    width : 100% ;
    height : 100% ;

    background-color : #111 ;

    position : absolute ;

    display : none ;

    opacity : 0.9 ;

    overflow : hidden ;

    z-index : 10 ;
`;

const ProjectContentButton = styled.button`
    all : unset ;

    position : absolute ;
    
    background-color : #fff ;

    z-index : 11 ;

    right : 3px ;
    bottom : 3px ;
    
    width : 15px ;
    height : 15px ;
    
    border-radius : 30px ;
`;

const LeftContainer = styled.div`
    width : 40% ;
    height : 100% ;
    
    border-left : 3px solid #fff ;

    float : left ;

    padding : 20px ;

    overflow : hidden ;
`;

const Title = styled.h3`
    font-size : 20px ;
    
    color : #fff ;

    margin-bottom : 20px ;
`;

const Date = styled.span`
    display : block ;

    color : #fff ;
    
    font-size : 12px ;
    margin-bottom : 15px ;
`;

const Description = styled.p`
    display : block ;
    
    color : #fff ;

    font-size : 15px ;

    line-height : 20px ;
`;

const GitHub = styled.a`

    display : block ;

    color : #fff ;
    font-size : 12px ;

    margin-bottom : 15px ;

    cursor : pointer ;
`;

const LanguageContainer = styled.div`
    width : 100% ;

    float : left ;

    color : #fff ;
    
    font-size : 15px ;
    margin-bottom : 15px ;

    display : flex ;
    
    align-items : center ;
`;

const Language = styled(FontAwesomeIcon)`

    font-size : 28px ;

    &:not(:last-child){
        margin-right : 20px ;
    }
`;

const RightContainer = styled.div`
    width : 60% ;
    height : 100% ;
    border-left : 3px solid #fff ;

    float : left ;

    overflow : hidden ;
`;

const Text = styled.span`
    margin-right : 20px ;
`;

const WIDTH = 500 ;
const HIGHT = 450 ;

const FACEWIDTH = 480 ;
const FACEHEIGHT = 310 ;

let mouseEvent = false ;

const Project = () => {

    const { tabletS } = size ;
    const [ projectContentData, setProjectContents ] = useState([]) ;
    const [ selectData, setSelectData ] = useState(0) ;

    useEffect(() => {

        async function fetchData() {
            try {

                const {
                  data : { 
                      projects
                  }
                } = await axiosApi.getProjectList() ;

                setProjectContents(projects) ;

                if(window.innerWidth >= tabletS) {
                const container = document.getElementById('container') ;

                let scene = new Scene() ;
                
                let camera = new PerspectiveCamera( 50, WIDTH/HIGHT, 1, 5000 );
                camera.position.set( 500, 350, 750 ) ;

                scene.add(camera) ;

                const renderer = new CSS3DRenderer() ;
                renderer.setSize( WIDTH, HIGHT ) ;

                container.appendChild(renderer.domElement) ;

                const controls = new TrackballControls(camera, renderer.domElement) ;
                controls.rotateSpeed = 2 ;
                const group = new Group() ;

                function animate() {
                    
                    requestAnimationFrame( animate ) ;

                    if ( mouseEvent === true ) controls.update() ;
                    else {
                        group.rotation.x += 0.001 ;
                        group.rotation.y += 0.003 ;
                        group.rotation.z += 0.001 ;
                    } ;
                    render() ;
                }

                function render() {
                    renderer.render( scene, camera );
                }

                function Element(id, x, y, z, ry, css, child = '') {

                    const divContainer = document.createElement( 'div' ) ;

                    divContainer.style.width = `${FACEWIDTH}px` ;
                    divContainer.style.height = `${FACEHEIGHT}px` ;
                    divContainer.style.position = 'relative' ;
                                
                    const div = document.createElement( 'div' ) ;
                    div.className = 'face' ;
                    
                    div.style.position = 'absolute' ;
                    div.style.top = `${FACEWIDTH / 2}px` ;
                    div.style.left = `${FACEHEIGHT / 2}px` ;
            
                    for(let key in css) {
                        if(div.style.hasOwnProperty(key)) {
                            div.style[key] = css[key] ;
                        }
                    }
            
                    div.innerHTML = child ;
                    divContainer.appendChild(div) ;

                    div.addEventListener('contextmenu', (e) => {
                        e.preventDefault() ;
                        e.stopImmediatePropagation() ;

                        const imageContainer = document.getElementById('imageContainer') ;
                        imageContainer.innerHTML = '' ;

                        const imageObj = e.currentTarget.cloneNode(true) ;
                        imageContainer.appendChild(imageObj) ;

                        imageObj.style.width = '100%' ;
                        imageObj.style.height = '100%' ;
                        imageObj.style.position = 'static' ;

                        if (imageObj.children[0].className === 'kinoko') {
                            imageObj.innerHTML = '' ;
                            imageObj.innerHTML = `<iframe width="100%" height="100%" src="${projects[3].image.split(' ')[1] || ''}" frameborder="0" allowfullscreen style=""></iframe>` ;
                        }
                        
                        const projectContent = document.getElementById('projectContent') ;
                        projectContent.style.display = 'block' ;
                        setSelectData(id) ;
                    }, false) ;
            
                    const object = new CSS3DObject( divContainer );
                    object.position.set( x, y, z );
                    object.rotation.y = ry ;
            
                    return object ;
                }

                function get3dData() {

                    group.add( new Element(0, 0, 0, 240, 0, {
                        width : `20px`,
                        height : `20px`,
                    },
                    `<img width="100%" height="100%" src="${projects[0].image || ''}" />`
                    )) ;
                    group.add( new Element(3, 240, 0, 0, Math.PI / 2, {
                        width : `20px`,
                        height : `20px`,
                    }, 
                    `<img class="kinoko" width="100%" height="100%" src="${projects[3].image.split(' ')[0] || ''}" />`) );
                    group.add( new Element(2, 0, 0, -240, Math.PI, {
                        width : `20px`,
                        height : `20px`,
                    },
                        `<img width="100%" height="100%" src="${projects[2].image || ''}" style="object-fit: cover;" />`
                    ) );
                    group.add( new Element(1, -240, 0, 0, - Math.PI / 2, {
                        width : `20px`,
                        height : `20px`,
                        overflow : 'hidden',
                        backgroundColor : '#111',
                        display : 'flex',
                        justifyContent : 'center'
                    },
                    `<img width="180px" height="100%" src="${projects[1].image || ''}" />`) ) ;

                    scene.add(group) ;
                
                    requestAnimationFrame( animate ) ;
                }
      
                get3dData() ;
            }
    
            }catch {
                console.log('error') ;
            }finally {
                
            }
        }

        fetchData() ;

        return ;
    }, []) ;

    function startAnimateControll(e) {
    
        e.stopPropagation() ;
        const container = document.getElementById('container') ;

        mouseEvent = true ;

        setTimeout(() => {
            mouseEvent = false ;
            container.addEventListener('click', startAnimateControll, false) ;
         }, 10000) ;

         container.removeEventListener('click', startAnimateControll, false) ;
    }
    function startButtonClick(e) {
        e.stopPropagation() ; 
    
        e.currentTarget.style.display = 'none' ;
        mouseEvent = true ;
    
        const face = document.querySelectorAll('div.face') ;
        face.forEach((faceNode) => {
          faceNode.style.transition = '2s all ease-in-out'
          faceNode.style.width=`100%`
          faceNode.style.height=`100%`
          faceNode.style.top = '0px' ;
          faceNode.style.left = '0px' ;
        }) ;

        const container = document.getElementById('container') ;
        container.addEventListener('click', startAnimateControll, false) ;
    }
    
    function projectContentOutButton(e) {
        const projectContent = document.getElementById('projectContent') ;
        
        projectContent.style.display = 'none' ;
    }

    function onClickContent(url) {
        window.open(url, '_blank') ;
    }

    return (
        <>
            {window.innerWidth <= tabletS ? (<Container>     
                <ContentContainer>
                    {projectContentData && projectContentData.map((content, index) => (
                        <ProjectContent 
                            key={index}
                            content={content}
                        />
                    ))}
                </ContentContainer>
            </Container>) : (
            <Container3D id="container">
                <Button onClick={startButtonClick} image={require('../assets/me.png').default}/>
                {projectContentData[selectData] &&
                    <ProjectContentContainer id="projectContent">
                        <ProjectContentButton onClick={projectContentOutButton} />
                            <LeftContainer>
                                <Title>{projectContentData[selectData].title}</Title>
                                <Date>{projectContentData[selectData].period}</Date>
                                <GitHub onClick={() => onClickContent(projectContentData[selectData].url)}>{projectContentData[selectData].url}</GitHub>
                                <LanguageContainer>
                                    <Text>사용언어</Text>
                                    { language.map((data, index) => {
                                        const arr = projectContentData[selectData].language.split(' ') ;
                                        for(let i = 0 ; i < arr.length ; i++) {
                                            if(arr[i] === data.text)
                                                return <Language icon={data.icon} color={data.color} key={index}/>
                                        }
                                        return null ;
                                    })}
                                </LanguageContainer>
                                <Description>{projectContentData[selectData].description}</Description>
                            </LeftContainer>
                            <RightContainer id="imageContainer" >
                            </RightContainer>
                    </ProjectContentContainer>
                }
            </Container3D>)}
        </>
    );
};

export default Project ;