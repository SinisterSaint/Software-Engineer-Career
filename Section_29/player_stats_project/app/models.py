def PlayerStats(db):
    class PlayerStats(db.Model):
        def __init__(self) -> None:
            super().__init__()
            id = db.Column(db.Integer, primary_key=True)
            player_name = db.Column(db.String(100))
            team = db.Column(db.String(50))
            points_per_game = db.Column(db.Float)
