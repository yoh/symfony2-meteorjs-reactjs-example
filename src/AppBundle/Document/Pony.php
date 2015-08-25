<?php

namespace AppBundle\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(collection="ponies")
 */
class Pony
{
    /**
     * @MongoDB\Id(name="_id", strategy="ALNUM")
     */
    protected $id;

    /**
     * @MongoDB\String
     */
    protected $name;

    /**
     * @MongoDB\Boolean
     */
    protected $free;

    /**
     * Get id
     *
     * @return id $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return self
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get name
     *
     * @return string $name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set id
     *
     * @param custom_id $id
     * @return self
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * Set free
     *
     * @param boolean $free
     * @return self
     */
    public function setFree($free)
    {
        $this->free = $free;
        return $this;
    }

    /**
     * Get free
     *
     * @return boolean $free
     */
    public function getFree()
    {
        return $this->free;
    }
}
