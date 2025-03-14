class Circle:

    def __init__(self, rayon):
        self.rayon = rayon

    def area (self, rayon):
        area = 3.14 * rayon**2
        return area

    def __str__(self):
        return f"Circle with radius {self.rayon}, area {self.area(self.rayon)}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.rayon + other.rayon)
        return NotImplemented
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.rayon > other.rayon
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.rayon < other.rayon
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.rayon == other.rayon
        return NotImplemented
    def __repr__(self):
        return f"Circle({self.rayon})"
    

    
rayon = int(input("Enter the radius of the circle: "))
circle1 = Circle(rayon)
circle2 = Circle(5)

circles = [circle1, circle2, Circle(3), Circle(7)]
sorted_circles = sorted(circles)

print(sorted_circles)

print(circle1 == circle2)
print(circle1 < circle2)
print(circle1 > circle2)
