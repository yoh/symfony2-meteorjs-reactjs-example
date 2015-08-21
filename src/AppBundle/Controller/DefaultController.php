<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $dm = $this->get('doctrine_mongodb');
        $poneys = $dm->getRepository('AppBundle:Poney')->findAll();

        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'poneys' => $poneys
        ]);
    }

    /**
     * @Route("/poney/{id}/edit", name="edit_poney")
     */
    public function editAction(Request $request, $id)
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $poney = $dm->getRepository('AppBundle:Poney')->find($id);

        $form = $this->createFormBuilder($poney)
            ->add('name', 'text', ['required' => true])
            ->add('free', 'checkbox', ['required' => false])
            ->add('save', 'submit')
            ->getForm();

        $form->handleRequest($request);

        if ($form->isValid()) {
            $dm->persist($form->getData());
            $dm->flush();

            return $this->redirect($this->generateUrl('homepage'));
        }

        // replace this example code with whatever you need
        return $this->render('default/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
