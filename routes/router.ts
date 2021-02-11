import { Router, Request, Response } from 'express'

const router = Router();

router.get('/mensajes', (req: Request,res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo listo'
    })
})
router.post('/mensajes/:id', (req: Request,res: Response) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Todo listo, esto es POST',
        id
    })
})

export default router;