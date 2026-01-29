import { useCallback } from "react";

// Subtle, soft click sound (base64 encoded)
const CLICK_SOUND = "data:audio/wav;base64,UklGRpQFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YXAFAAB4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8AAAD///7+/v39/fz8/Pv7+/r6+vn5+fj4+Pf39/b29vX19fT09PPz8/Ly8vHx8fDw8O/v7+7u7u3t7ezs7Ovr6+rq6unp6ejo6Ofn5+bm5uXl5eTk5OPj4+Li4uHh4eDg4N/f397e3t3d3dzc3Nvb29ra2tnZ2djY2NfX19bW1tXV1dTU1NPT09LS0tHR0dDQ0M/Pz87Ozs3NzczMzMvLy8rKysnJycjIyMfHx8bGxsXFxcTExMPDw8LCwsHBwcDAwL+/v76+vr29vby8vLu7u7q6urm5ubi4uLe3t7a2trW1tbS0tLOzs7KysrGxsbCwsK+vr66urq2tra2trKysq6urqqqqq6uqqqqpqamqqqmpqaioqKmpqKioqKenp6ioqKenp6amp6enp6amp6amp6Wlpqamp6WlpaWlpaSkpKWlpaSkpKSkpKOjo6SkpKOjo6Ojo6KioqOjo6KioqKioqGhoaKioqGhoaGhoaCgoKGhoaCgoKCgoJ+fn6CgoJ+fn5+fn56enp+fn56enp6enp2dnZ6enp2dnZ2dnZycnJ2dnZycnJycnJubm5ycnJubm5ubm5qampubm5qampqammmpqZqampmZmZqampmZmZmZmZiYmJmZmZiYmJiYmJeXl5iYmJeXl5eXl5aWlpeXl5aWlpaWlpWVlZaWlpWVlZWVlZSUlJWVlZSUlJSUlJOTk5SUlJOTk5OTk5KSkpOTk5KSkpKSkpGRkZKSkpGRkZGRkZCQkJGRkZCQkJCQkI+Pj5CQkI+Pj4+Pj46Ojo+Pj46Ojo6Ojo2NjY6Ojo2NjY2NjYyMjI2NjYyMjIyMjIuLi4yMjIuLi4uLi4qKiouLi4qKioqKiomJiYqKiomJiYmJiYiIiImJiYiIiIiIiIeHh4iIiIeHh4eHh4aGhoeHh4aGhoaGhoWFhYaGhoWFhYWFhYSEhIWFhYSEhISEhIODg4SEhIODg4ODg4KCgoODg4KCgoKCgoGBgYKCgoGBgYGBgYCAgIGBgYCAgICAgH9/f4CAgH9/f39/f35+fn9/f35+fn5+fn19fX5+fn19fX19fXx8fH19fXx8fHx8fHt7e3x8fHt7e3t7e3p6ent7e3p6enp6enl5eXp6enl5eXl5eXh4eHl5eXh4eHh4eHd3d3h4eHd3d3d3d3Z2dnd3d3Z2dnZ2dnV1dXZ2dnV1dXV1dXR0dHV1dXR0dHR0dA==";

export const useClickSound = () => {
  const playClick = useCallback(() => {
    try {
      const audio = new Audio(CLICK_SOUND);
      audio.volume = 0.35; // Slightly louder click
      audio.play().catch(() => {
        // Ignore autoplay restrictions
      });
    } catch {
      // Audio not supported
    }
  }, []);

  return { playClick };
};

// Standalone function for non-hook usage
export const playClickSound = () => {
  try {
    const audio = new Audio(CLICK_SOUND);
    audio.volume = 0.35;
    audio.play().catch(() => {});
  } catch {
    // Audio not supported
  }
};
