import React, { useState } from "react";
import { useRecipeStore } from "../components/recipeStore"; // تأكدي من المسار حسب مكان ملفك

const EditRecipeForm = ({ recipeId, onClose }) => {
  // نجيب الوصفة اللي هنعملها تعديل
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  // نجيب دالة التحديث من الـ store
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // ستات داخلية لحفظ التعديلات قبل الإرسال
  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  // عند الضغط على زرار الحفظ
  const handleSubmit = (event) => {
    event.preventDefault(); // لازم علشان تمنعي reload للصفحة

    updateRecipe(recipeId, {
      title,
      description,
    });

    if (onClose) onClose(); // لو فيه فنكشن غلق بعد التعديل
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;

