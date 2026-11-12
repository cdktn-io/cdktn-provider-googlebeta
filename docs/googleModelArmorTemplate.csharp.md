# `googleModelArmorTemplate` Submodule <a name="`googleModelArmorTemplate` Submodule" id="@cdktn/provider-google-beta.googleModelArmorTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleModelArmorTemplate <a name="GoogleModelArmorTemplate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template google_model_armor_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplate(Construct Scope, string Id, GoogleModelArmorTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig">GoogleModelArmorTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig">GoogleModelArmorTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig">PutFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata">PutTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTemplateMetadata">ResetTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilterConfig` <a name="PutFilterConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig"></a>

```csharp
private void PutFilterConfig(GoogleModelArmorTemplateFilterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

---

##### `PutTemplateMetadata` <a name="PutTemplateMetadata" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata"></a>

```csharp
private void PutTemplateMetadata(GoogleModelArmorTemplateTemplateMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleModelArmorTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTemplateMetadata` <a name="ResetTemplateMetadata" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTemplateMetadata"></a>

```csharp
private void ResetTemplateMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleModelArmorTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorTemplate.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleModelArmorTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleModelArmorTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleModelArmorTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleModelArmorTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference">GoogleModelArmorTemplateFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference">GoogleModelArmorTemplateTemplateMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference">GoogleModelArmorTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfigInput">FilterConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateIdInput">TemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadataInput">TemplateMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfig"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigOutputReference FilterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference">GoogleModelArmorTemplateFilterConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TemplateMetadata`<sup>Required</sup> <a name="TemplateMetadata" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadata"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataOutputReference TemplateMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference">GoogleModelArmorTemplateTemplateMetadataOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeouts"></a>

```csharp
public GoogleModelArmorTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference">GoogleModelArmorTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `FilterConfigInput`<sup>Optional</sup> <a name="FilterConfigInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfigInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfig FilterConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateIdInput"></a>

```csharp
public string TemplateIdInput { get; }
```

- *Type:* string

---

##### `TemplateMetadataInput`<sup>Optional</sup> <a name="TemplateMetadataInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadataInput"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadata TemplateMetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleModelArmorTemplateConfig <a name="GoogleModelArmorTemplateConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleModelArmorTemplateFilterConfig FilterConfig,
    string Location,
    string TemplateId,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleModelArmorTemplateTemplateMetadata TemplateMetadata = null,
    GoogleModelArmorTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateId">TemplateId</a></code> | <code>string</code> | Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#id GoogleModelArmorTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#project GoogleModelArmorTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a></code> | template_metadata block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.filterConfig"></a>

```csharp
public GoogleModelArmorTemplateFilterConfig FilterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_config GoogleModelArmorTemplate#filter_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#location GoogleModelArmorTemplate#location}

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateId"></a>

```csharp
public string TemplateId { get; set; }
```

- *Type:* string

Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#template_id GoogleModelArmorTemplate#template_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#deletion_policy GoogleModelArmorTemplate#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#id GoogleModelArmorTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#labels GoogleModelArmorTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#project GoogleModelArmorTemplate#project}.

---

##### `TemplateMetadata`<sup>Optional</sup> <a name="TemplateMetadata" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateMetadata"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadata TemplateMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

template_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#template_metadata GoogleModelArmorTemplate#template_metadata}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.timeouts"></a>

```csharp
public GoogleModelArmorTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#timeouts GoogleModelArmorTemplate#timeouts}

---

### GoogleModelArmorTemplateFilterConfig <a name="GoogleModelArmorTemplateFilterConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfig {
    GoogleModelArmorTemplateFilterConfigFilterRuleSettings FilterRuleSettings = null,
    GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings = null,
    GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings = null,
    GoogleModelArmorTemplateFilterConfigRaiSettings RaiSettings = null,
    GoogleModelArmorTemplateFilterConfigSdpSettings SdpSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.filterRuleSettings">FilterRuleSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings">GoogleModelArmorTemplateFilterConfigFilterRuleSettings</a></code> | filter_rule_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `FilterRuleSettings`<sup>Optional</sup> <a name="FilterRuleSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.filterRuleSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettings FilterRuleSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings">GoogleModelArmorTemplateFilterConfigFilterRuleSettings</a>

filter_rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_rule_settings GoogleModelArmorTemplate#filter_rule_settings}

---

##### `MaliciousUriFilterSettings`<sup>Optional</sup> <a name="MaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#malicious_uri_filter_settings GoogleModelArmorTemplate#malicious_uri_filter_settings}

---

##### `PiAndJailbreakFilterSettings`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#pi_and_jailbreak_filter_settings GoogleModelArmorTemplate#pi_and_jailbreak_filter_settings}

---

##### `RaiSettings`<sup>Optional</sup> <a name="RaiSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.raiSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigRaiSettings RaiSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#rai_settings GoogleModelArmorTemplate#rai_settings}

---

##### `SdpSettings`<sup>Optional</sup> <a name="SdpSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.sdpSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettings SdpSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#sdp_settings GoogleModelArmorTemplate#sdp_settings}

---

### GoogleModelArmorTemplateFilterConfigFilterRuleSettings <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettings {
    IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets[] RuleSets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings.property.ruleSets">RuleSets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>[]</code> | rule_sets block. |

---

##### `RuleSets`<sup>Optional</sup> <a name="RuleSets" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings.property.ruleSets"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets[] RuleSets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>[]

rule_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#rule_sets GoogleModelArmorTemplate#rule_sets}

---

### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets {
    string[] FilterTypes,
    IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules[] Rules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets.property.filterTypes">FilterTypes</a></code> | <code>string[]</code> | List of filters this rule set is applied to. Possible values: PROMPT_INJECTION_AND_JAILBREAK RESPONSIBLE_AI. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>[]</code> | rules block. |

---

##### `FilterTypes`<sup>Required</sup> <a name="FilterTypes" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets.property.filterTypes"></a>

```csharp
public string[] FilterTypes { get; set; }
```

- *Type:* string[]

List of filters this rule set is applied to. Possible values: PROMPT_INJECTION_AND_JAILBREAK RESPONSIBLE_AI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_types GoogleModelArmorTemplate#filter_types}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets.property.rules"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#rules GoogleModelArmorTemplate#rules}

---

### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules {
    GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule ExclusionRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules.property.exclusionRule">ExclusionRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule</a></code> | exclusion_rule block. |

---

##### `ExclusionRule`<sup>Optional</sup> <a name="ExclusionRule" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules.property.exclusionRule"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule ExclusionRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule</a>

exclusion_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#exclusion_rule GoogleModelArmorTemplate#exclusion_rule}

---

### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule {
    GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary Dictionary = null,
    string MatchingScope = null,
    GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule.property.matchingScope">MatchingScope</a></code> | <code>string</code> | Specifies the scope of the input that should be matched against the exclusion rule. If unspecified, defaults to MATCHING_SCOPE_PARTIAL_MATCH. Possible values: MATCHING_SCOPE_FULL_MATCH MATCHING_SCOPE_PARTIAL_MATCH. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule.property.regex">Regex</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex</a></code> | regex block. |

---

##### `Dictionary`<sup>Optional</sup> <a name="Dictionary" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule.property.dictionary"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary Dictionary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#dictionary GoogleModelArmorTemplate#dictionary}

---

##### `MatchingScope`<sup>Optional</sup> <a name="MatchingScope" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule.property.matchingScope"></a>

```csharp
public string MatchingScope { get; set; }
```

- *Type:* string

Specifies the scope of the input that should be matched against the exclusion rule. If unspecified, defaults to MATCHING_SCOPE_PARTIAL_MATCH. Possible values: MATCHING_SCOPE_FULL_MATCH MATCHING_SCOPE_PARTIAL_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#matching_scope GoogleModelArmorTemplate#matching_scope}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule.property.regex"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex Regex { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex</a>

regex block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#regex GoogleModelArmorTemplate#regex}

---

### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary {
    GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct WordList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary.property.wordList">WordList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct</a></code> | word_list block. |

---

##### `WordList`<sup>Optional</sup> <a name="WordList" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary.property.wordList"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct WordList { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct</a>

word_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#word_list GoogleModelArmorTemplate#word_list}

---

### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct {
    string[] Words
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct.property.words">Words</a></code> | <code>string[]</code> | Words or phrases defining the dictionary. |

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct.property.words"></a>

```csharp
public string[] Words { get; set; }
```

- *Type:* string[]

Words or phrases defining the dictionary.

The dictionary must contain at
least one phrase and every phrase must contain at least two characters that
are letters or digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#words GoogleModelArmorTemplate#words}

---

### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex {
    string Pattern
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex.property.pattern">Pattern</a></code> | <code>string</code> | The regular expression pattern. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The regular expression pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#pattern GoogleModelArmorTemplate#pattern}

---

### GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings <a name="GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

### GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings <a name="GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings {
    string ConfidenceLevel = null,
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#confidence_level GoogleModelArmorTemplate#confidence_level}

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

### GoogleModelArmorTemplateFilterConfigRaiSettings <a name="GoogleModelArmorTemplateFilterConfigRaiSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigRaiSettings {
    IResolvable|GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] RaiFilters
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings.property.raiFilters">RaiFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]</code> | rai_filters block. |

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings.property.raiFilters"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] RaiFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#rai_filters GoogleModelArmorTemplate#rai_filters}

---

### GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters {
    string FilterType,
    string ConfidenceLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType">FilterType</a></code> | <code>string</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_type GoogleModelArmorTemplate#filter_type}

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#confidence_level GoogleModelArmorTemplate#confidence_level}

---

### GoogleModelArmorTemplateFilterConfigSdpSettings <a name="GoogleModelArmorTemplateFilterConfigSdpSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigSdpSettings {
    GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig AdvancedConfig = null,
    GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig BasicConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `AdvancedConfig`<sup>Optional</sup> <a name="AdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig AdvancedConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#advanced_config GoogleModelArmorTemplate#advanced_config}

---

##### `BasicConfig`<sup>Optional</sup> <a name="BasicConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.basicConfig"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig BasicConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#basic_config GoogleModelArmorTemplate#basic_config}

---

### GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig {
    string DeidentifyTemplate = null,
    string InspectTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization. |

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; set; }
```

- *Type:* string

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.
e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#deidentify_template GoogleModelArmorTemplate#deidentify_template}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; set; }
```

- *Type:* string

Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization.

All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.
e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#inspect_template GoogleModelArmorTemplate#inspect_template}

---

### GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

### GoogleModelArmorTemplateTemplateMetadata <a name="GoogleModelArmorTemplateTemplateMetadata" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTemplateMetadata {
    double CustomLlmResponseSafetyErrorCode = null,
    string CustomLlmResponseSafetyErrorMessage = null,
    double CustomPromptSafetyErrorCode = null,
    string CustomPromptSafetyErrorMessage = null,
    bool|IResolvable DataResidencyCompliant = null,
    string EnforcementType = null,
    GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector FilterVersionSelector = null,
    bool|IResolvable IgnorePartialInvocationFailures = null,
    bool|IResolvable LogSanitizeOperations = null,
    bool|IResolvable LogTemplateOperations = null,
    string[] Modalities = null,
    GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection MultiLanguageDetection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode">CustomLlmResponseSafetyErrorCode</a></code> | <code>double</code> | Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage">CustomLlmResponseSafetyErrorMessage</a></code> | <code>string</code> | Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode">CustomPromptSafetyErrorCode</a></code> | <code>double</code> | Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage">CustomPromptSafetyErrorMessage</a></code> | <code>string</code> | Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.dataResidencyCompliant">DataResidencyCompliant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the template is subject to data residency compliance. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.enforcementType">EnforcementType</a></code> | <code>string</code> | Possible values: INSPECT_ONLY INSPECT_AND_BLOCK. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.filterVersionSelector">FilterVersionSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector</a></code> | filter_version_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures">IgnorePartialInvocationFailures</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, partial detector failures should be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logSanitizeOperations">LogSanitizeOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, log sanitize operations. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logTemplateOperations">LogTemplateOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, log template crud operations. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.modalities">Modalities</a></code> | <code>string[]</code> | Specifies the modalities to scan. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `CustomLlmResponseSafetyErrorCode`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorCode" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode"></a>

```csharp
public double CustomLlmResponseSafetyErrorCode { get; set; }
```

- *Type:* double

Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#custom_llm_response_safety_error_code GoogleModelArmorTemplate#custom_llm_response_safety_error_code}

---

##### `CustomLlmResponseSafetyErrorMessage`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorMessage" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage"></a>

```csharp
public string CustomLlmResponseSafetyErrorMessage { get; set; }
```

- *Type:* string

Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#custom_llm_response_safety_error_message GoogleModelArmorTemplate#custom_llm_response_safety_error_message}

---

##### `CustomPromptSafetyErrorCode`<sup>Optional</sup> <a name="CustomPromptSafetyErrorCode" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode"></a>

```csharp
public double CustomPromptSafetyErrorCode { get; set; }
```

- *Type:* double

Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#custom_prompt_safety_error_code GoogleModelArmorTemplate#custom_prompt_safety_error_code}

---

##### `CustomPromptSafetyErrorMessage`<sup>Optional</sup> <a name="CustomPromptSafetyErrorMessage" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage"></a>

```csharp
public string CustomPromptSafetyErrorMessage { get; set; }
```

- *Type:* string

Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#custom_prompt_safety_error_message GoogleModelArmorTemplate#custom_prompt_safety_error_message}

---

##### `DataResidencyCompliant`<sup>Optional</sup> <a name="DataResidencyCompliant" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.dataResidencyCompliant"></a>

```csharp
public bool|IResolvable DataResidencyCompliant { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the template is subject to data residency compliance.

If
true (default for new templates), the template is subject to data residency
compliance. If false, the template bypasses data residency compliance
checks. If unset, the value is determined by the API; templates created
before data residency enforcement may report false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#data_residency_compliant GoogleModelArmorTemplate#data_residency_compliant}

---

##### `EnforcementType`<sup>Optional</sup> <a name="EnforcementType" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.enforcementType"></a>

```csharp
public string EnforcementType { get; set; }
```

- *Type:* string

Possible values: INSPECT_ONLY INSPECT_AND_BLOCK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#enforcement_type GoogleModelArmorTemplate#enforcement_type}

---

##### `FilterVersionSelector`<sup>Optional</sup> <a name="FilterVersionSelector" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.filterVersionSelector"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector FilterVersionSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector</a>

filter_version_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#filter_version_selector GoogleModelArmorTemplate#filter_version_selector}

---

##### `IgnorePartialInvocationFailures`<sup>Optional</sup> <a name="IgnorePartialInvocationFailures" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures"></a>

```csharp
public bool|IResolvable IgnorePartialInvocationFailures { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, partial detector failures should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#ignore_partial_invocation_failures GoogleModelArmorTemplate#ignore_partial_invocation_failures}

---

##### `LogSanitizeOperations`<sup>Optional</sup> <a name="LogSanitizeOperations" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logSanitizeOperations"></a>

```csharp
public bool|IResolvable LogSanitizeOperations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, log sanitize operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#log_sanitize_operations GoogleModelArmorTemplate#log_sanitize_operations}

---

##### `LogTemplateOperations`<sup>Optional</sup> <a name="LogTemplateOperations" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logTemplateOperations"></a>

```csharp
public bool|IResolvable LogTemplateOperations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, log template crud operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#log_template_operations GoogleModelArmorTemplate#log_template_operations}

---

##### `Modalities`<sup>Optional</sup> <a name="Modalities" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.modalities"></a>

```csharp
public string[] Modalities { get; set; }
```

- *Type:* string[]

Specifies the modalities to scan.

If empty, only text modality will be
scanned. Image screening is in Preview and is only supported in the 'us'
and 'eu' multi-regions; regional endpoints such as 'us-central1' do not
support it.
Possible values:
MODALITY_TEXT
MODALITY_IMAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#modalities GoogleModelArmorTemplate#modalities}

---

##### `MultiLanguageDetection`<sup>Optional</sup> <a name="MultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.multiLanguageDetection"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection MultiLanguageDetection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#multi_language_detection GoogleModelArmorTemplate#multi_language_detection}

---

### GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector <a name="GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector {
    string Alias = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector.property.alias">Alias</a></code> | <code>string</code> | A predefined filter version alias. The template automatically follows the version this alias points to. Possible values: FILTER_VERSION_ALIAS_STABLE FILTER_VERSION_ALIAS_LATEST. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector.property.version">Version</a></code> | <code>string</code> | Pins the template to a specific, immutable filter version. Expected format is a case-sensitive string such as 'v1' or 'v2'. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

A predefined filter version alias. The template automatically follows the version this alias points to. Possible values: FILTER_VERSION_ALIAS_STABLE FILTER_VERSION_ALIAS_LATEST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#alias GoogleModelArmorTemplate#alias}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Pins the template to a specific, immutable filter version. Expected format is a case-sensitive string such as 'v1' or 'v2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#version GoogleModelArmorTemplate#version}

---

### GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection <a name="GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection {
    bool|IResolvable EnableMultiLanguageDetection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, multi language detection will be enabled. |

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#enable_multi_language_detection GoogleModelArmorTemplate#enable_multi_language_detection}

---

### GoogleModelArmorTemplateTimeouts <a name="GoogleModelArmorTemplateTimeouts" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#create GoogleModelArmorTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#delete GoogleModelArmorTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#update GoogleModelArmorTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#create GoogleModelArmorTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#delete GoogleModelArmorTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_model_armor_template#update GoogleModelArmorTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.putRuleSets">PutRuleSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.resetRuleSets">ResetRuleSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleSets` <a name="PutRuleSets" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.putRuleSets"></a>

```csharp
private void PutRuleSets(IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.putRuleSets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>[]

---

##### `ResetRuleSets` <a name="ResetRuleSets" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.resetRuleSets"></a>

```csharp
private void ResetRuleSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.ruleSets">RuleSets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.ruleSetsInput">RuleSetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings">GoogleModelArmorTemplateFilterConfigFilterRuleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleSets`<sup>Required</sup> <a name="RuleSets" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.ruleSets"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList RuleSets { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList</a>

---

##### `RuleSetsInput`<sup>Optional</sup> <a name="RuleSetsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.ruleSetsInput"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets[] RuleSetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings">GoogleModelArmorTemplateFilterConfigFilterRuleSettings</a>

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.get"></a>

```csharp
private GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>[]

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.filterTypesInput">FilterTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.filterTypes">FilterTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.rules"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList</a>

---

##### `FilterTypesInput`<sup>Optional</sup> <a name="FilterTypesInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.filterTypesInput"></a>

```csharp
public string[] FilterTypesInput { get; }
```

- *Type:* string[]

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>[]

---

##### `FilterTypes`<sup>Required</sup> <a name="FilterTypes" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.filterTypes"></a>

```csharp
public string[] FilterTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSets</a>

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.putWordList">PutWordList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.resetWordList">ResetWordList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWordList` <a name="PutWordList" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.putWordList"></a>

```csharp
private void PutWordList(GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct</a>

---

##### `ResetWordList` <a name="ResetWordList" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.resetWordList"></a>

```csharp
private void ResetWordList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.wordList">WordList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.wordListInput">WordListInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.wordList"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference WordList { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference</a>

---

##### `WordListInput`<sup>Optional</sup> <a name="WordListInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.wordListInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct WordListInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary</a>

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.wordsInput">WordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.words">Words</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.wordsInput"></a>

```csharp
public string[] WordsInput { get; }
```

- *Type:* string[]

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.words"></a>

```csharp
public string[] Words { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStructOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryWordListStruct</a>

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.putDictionary">PutDictionary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.putRegex">PutRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resetDictionary">ResetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resetMatchingScope">ResetMatchingScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDictionary` <a name="PutDictionary" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.putDictionary"></a>

```csharp
private void PutDictionary(GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary</a>

---

##### `PutRegex` <a name="PutRegex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.putRegex"></a>

```csharp
private void PutRegex(GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex</a>

---

##### `ResetDictionary` <a name="ResetDictionary" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resetDictionary"></a>

```csharp
private void ResetDictionary()
```

##### `ResetMatchingScope` <a name="ResetMatchingScope" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resetMatchingScope"></a>

```csharp
private void ResetMatchingScope()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.regex">Regex</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.dictionaryInput">DictionaryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.matchingScopeInput">MatchingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.regexInput">RegexInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.matchingScope">MatchingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.dictionary"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference Dictionary { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionaryOutputReference</a>

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.regex"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference Regex { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference</a>

---

##### `DictionaryInput`<sup>Optional</sup> <a name="DictionaryInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.dictionaryInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary DictionaryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleDictionary</a>

---

##### `MatchingScopeInput`<sup>Optional</sup> <a name="MatchingScopeInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.matchingScopeInput"></a>

```csharp
public string MatchingScopeInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.regexInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex RegexInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex</a>

---

##### `MatchingScope`<sup>Required</sup> <a name="MatchingScope" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.matchingScope"></a>

```csharp
public string MatchingScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule</a>

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegexOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleRegex</a>

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.get"></a>

```csharp
private GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>[]

---


### GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference <a name="GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.putExclusionRule">PutExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.resetExclusionRule">ResetExclusionRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusionRule` <a name="PutExclusionRule" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.putExclusionRule"></a>

```csharp
private void PutExclusionRule(GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.putExclusionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule</a>

---

##### `ResetExclusionRule` <a name="ResetExclusionRule" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.resetExclusionRule"></a>

```csharp
private void ResetExclusionRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.exclusionRule">ExclusionRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.exclusionRuleInput">ExclusionRuleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusionRule`<sup>Required</sup> <a name="ExclusionRule" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.exclusionRule"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference ExclusionRule { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRuleOutputReference</a>

---

##### `ExclusionRuleInput`<sup>Optional</sup> <a name="ExclusionRuleInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.exclusionRuleInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule ExclusionRuleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesExclusionRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsRuleSetsRules</a>

---


### GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---


### GoogleModelArmorTemplateFilterConfigOutputReference <a name="GoogleModelArmorTemplateFilterConfigOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putFilterRuleSettings">PutFilterRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings">PutMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings">PutPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putRaiSettings">PutRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putSdpSettings">PutSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetFilterRuleSettings">ResetFilterRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings">ResetMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">ResetPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetRaiSettings">ResetRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetSdpSettings">ResetSdpSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterRuleSettings` <a name="PutFilterRuleSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putFilterRuleSettings"></a>

```csharp
private void PutFilterRuleSettings(GoogleModelArmorTemplateFilterConfigFilterRuleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putFilterRuleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings">GoogleModelArmorTemplateFilterConfigFilterRuleSettings</a>

---

##### `PutMaliciousUriFilterSettings` <a name="PutMaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```csharp
private void PutMaliciousUriFilterSettings(GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `PutPiAndJailbreakFilterSettings` <a name="PutPiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```csharp
private void PutPiAndJailbreakFilterSettings(GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `PutRaiSettings` <a name="PutRaiSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putRaiSettings"></a>

```csharp
private void PutRaiSettings(GoogleModelArmorTemplateFilterConfigRaiSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putRaiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `PutSdpSettings` <a name="PutSdpSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putSdpSettings"></a>

```csharp
private void PutSdpSettings(GoogleModelArmorTemplateFilterConfigSdpSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `ResetFilterRuleSettings` <a name="ResetFilterRuleSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetFilterRuleSettings"></a>

```csharp
private void ResetFilterRuleSettings()
```

##### `ResetMaliciousUriFilterSettings` <a name="ResetMaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```csharp
private void ResetMaliciousUriFilterSettings()
```

##### `ResetPiAndJailbreakFilterSettings` <a name="ResetPiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```csharp
private void ResetPiAndJailbreakFilterSettings()
```

##### `ResetRaiSettings` <a name="ResetRaiSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetRaiSettings"></a>

```csharp
private void ResetRaiSettings()
```

##### `ResetSdpSettings` <a name="ResetSdpSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetSdpSettings"></a>

```csharp
private void ResetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.filterRuleSettings">FilterRuleSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference">GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.filterRuleSettingsInput">FilterRuleSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings">GoogleModelArmorTemplateFilterConfigFilterRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">MaliciousUriFilterSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">PiAndJailbreakFilterSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput">RaiSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput">SdpSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterRuleSettings`<sup>Required</sup> <a name="FilterRuleSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.filterRuleSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference FilterRuleSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference">GoogleModelArmorTemplateFilterConfigFilterRuleSettingsOutputReference</a>

---

##### `MaliciousUriFilterSettings`<sup>Required</sup> <a name="MaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference MaliciousUriFilterSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `PiAndJailbreakFilterSettings`<sup>Required</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference PiAndJailbreakFilterSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `RaiSettings`<sup>Required</sup> <a name="RaiSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference RaiSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference">GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference</a>

---

##### `SdpSettings`<sup>Required</sup> <a name="SdpSettings" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettings"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference SdpSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference</a>

---

##### `FilterRuleSettingsInput`<sup>Optional</sup> <a name="FilterRuleSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.filterRuleSettingsInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigFilterRuleSettings FilterRuleSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigFilterRuleSettings">GoogleModelArmorTemplateFilterConfigFilterRuleSettings</a>

---

##### `MaliciousUriFilterSettingsInput`<sup>Optional</sup> <a name="MaliciousUriFilterSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `PiAndJailbreakFilterSettingsInput`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `RaiSettingsInput`<sup>Optional</sup> <a name="RaiSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigRaiSettings RaiSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `SdpSettingsInput`<sup>Optional</sup> <a name="SdpSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettings SdpSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

---


### GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---


### GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters">PutRaiFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRaiFilters` <a name="PutRaiFilters" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```csharp
private void PutRaiFilters(IResolvable|GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters">RaiFilters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">RaiFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList RaiFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `RaiFiltersInput`<sup>Optional</sup> <a name="RaiFiltersInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] RaiFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigRaiSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

---


### GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get"></a>

```csharp
private GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

---


### GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>

---


### GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```csharp
private void ResetDeidentifyTemplate()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```csharp
private void ResetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```csharp
public string DeidentifyTemplateInput { get; }
```

- *Type:* string

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```csharp
public string InspectTemplateInput { get; }
```

- *Type:* string

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; }
```

- *Type:* string

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---


### GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---


### GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig">PutAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig">PutBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">ResetAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig">ResetBasicConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedConfig` <a name="PutAdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```csharp
private void PutAdvancedConfig(GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `PutBasicConfig` <a name="PutBasicConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```csharp
private void PutBasicConfig(GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `ResetAdvancedConfig` <a name="ResetAdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```csharp
private void ResetAdvancedConfig()
```

##### `ResetBasicConfig` <a name="ResetBasicConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```csharp
private void ResetBasicConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">AdvancedConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput">BasicConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedConfig`<sup>Required</sup> <a name="AdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference AdvancedConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `BasicConfig`<sup>Required</sup> <a name="BasicConfig" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference BasicConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `AdvancedConfigInput`<sup>Optional</sup> <a name="AdvancedConfigInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig AdvancedConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `BasicConfigInput`<sup>Optional</sup> <a name="BasicConfigInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig BasicConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateFilterConfigSdpSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

---


### GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference <a name="GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector</a>

---


### GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference <a name="GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">EnableMultiLanguageDetectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableMultiLanguageDetectionInput`<sup>Optional</sup> <a name="EnableMultiLanguageDetectionInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---


### GoogleModelArmorTemplateTemplateMetadataOutputReference <a name="GoogleModelArmorTemplateTemplateMetadataOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTemplateMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putFilterVersionSelector">PutFilterVersionSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection">PutMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode">ResetCustomLlmResponseSafetyErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage">ResetCustomLlmResponseSafetyErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode">ResetCustomPromptSafetyErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage">ResetCustomPromptSafetyErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetDataResidencyCompliant">ResetDataResidencyCompliant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType">ResetEnforcementType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetFilterVersionSelector">ResetFilterVersionSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures">ResetIgnorePartialInvocationFailures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations">ResetLogSanitizeOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations">ResetLogTemplateOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetModalities">ResetModalities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection">ResetMultiLanguageDetection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterVersionSelector` <a name="PutFilterVersionSelector" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putFilterVersionSelector"></a>

```csharp
private void PutFilterVersionSelector(GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putFilterVersionSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector</a>

---

##### `PutMultiLanguageDetection` <a name="PutMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection"></a>

```csharp
private void PutMultiLanguageDetection(GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `ResetCustomLlmResponseSafetyErrorCode` <a name="ResetCustomLlmResponseSafetyErrorCode" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode"></a>

```csharp
private void ResetCustomLlmResponseSafetyErrorCode()
```

##### `ResetCustomLlmResponseSafetyErrorMessage` <a name="ResetCustomLlmResponseSafetyErrorMessage" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage"></a>

```csharp
private void ResetCustomLlmResponseSafetyErrorMessage()
```

##### `ResetCustomPromptSafetyErrorCode` <a name="ResetCustomPromptSafetyErrorCode" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode"></a>

```csharp
private void ResetCustomPromptSafetyErrorCode()
```

##### `ResetCustomPromptSafetyErrorMessage` <a name="ResetCustomPromptSafetyErrorMessage" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage"></a>

```csharp
private void ResetCustomPromptSafetyErrorMessage()
```

##### `ResetDataResidencyCompliant` <a name="ResetDataResidencyCompliant" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetDataResidencyCompliant"></a>

```csharp
private void ResetDataResidencyCompliant()
```

##### `ResetEnforcementType` <a name="ResetEnforcementType" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType"></a>

```csharp
private void ResetEnforcementType()
```

##### `ResetFilterVersionSelector` <a name="ResetFilterVersionSelector" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetFilterVersionSelector"></a>

```csharp
private void ResetFilterVersionSelector()
```

##### `ResetIgnorePartialInvocationFailures` <a name="ResetIgnorePartialInvocationFailures" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures"></a>

```csharp
private void ResetIgnorePartialInvocationFailures()
```

##### `ResetLogSanitizeOperations` <a name="ResetLogSanitizeOperations" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations"></a>

```csharp
private void ResetLogSanitizeOperations()
```

##### `ResetLogTemplateOperations` <a name="ResetLogTemplateOperations" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations"></a>

```csharp
private void ResetLogTemplateOperations()
```

##### `ResetModalities` <a name="ResetModalities" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetModalities"></a>

```csharp
private void ResetModalities()
```

##### `ResetMultiLanguageDetection` <a name="ResetMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection"></a>

```csharp
private void ResetMultiLanguageDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.filterVersionSelector">FilterVersionSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput">CustomLlmResponseSafetyErrorCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput">CustomLlmResponseSafetyErrorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput">CustomPromptSafetyErrorCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput">CustomPromptSafetyErrorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.dataResidencyCompliantInput">DataResidencyCompliantInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput">EnforcementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.filterVersionSelectorInput">FilterVersionSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput">IgnorePartialInvocationFailuresInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput">LogSanitizeOperationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput">LogTemplateOperationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.modalitiesInput">ModalitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput">MultiLanguageDetectionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode">CustomLlmResponseSafetyErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage">CustomLlmResponseSafetyErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode">CustomPromptSafetyErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage">CustomPromptSafetyErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.dataResidencyCompliant">DataResidencyCompliant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType">EnforcementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures">IgnorePartialInvocationFailures</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations">LogSanitizeOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations">LogTemplateOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.modalities">Modalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterVersionSelector`<sup>Required</sup> <a name="FilterVersionSelector" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.filterVersionSelector"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference FilterVersionSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelectorOutputReference</a>

---

##### `MultiLanguageDetection`<sup>Required</sup> <a name="MultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference MultiLanguageDetection { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a>

---

##### `CustomLlmResponseSafetyErrorCodeInput`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorCodeInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput"></a>

```csharp
public double CustomLlmResponseSafetyErrorCodeInput { get; }
```

- *Type:* double

---

##### `CustomLlmResponseSafetyErrorMessageInput`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorMessageInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput"></a>

```csharp
public string CustomLlmResponseSafetyErrorMessageInput { get; }
```

- *Type:* string

---

##### `CustomPromptSafetyErrorCodeInput`<sup>Optional</sup> <a name="CustomPromptSafetyErrorCodeInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput"></a>

```csharp
public double CustomPromptSafetyErrorCodeInput { get; }
```

- *Type:* double

---

##### `CustomPromptSafetyErrorMessageInput`<sup>Optional</sup> <a name="CustomPromptSafetyErrorMessageInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput"></a>

```csharp
public string CustomPromptSafetyErrorMessageInput { get; }
```

- *Type:* string

---

##### `DataResidencyCompliantInput`<sup>Optional</sup> <a name="DataResidencyCompliantInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.dataResidencyCompliantInput"></a>

```csharp
public bool|IResolvable DataResidencyCompliantInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnforcementTypeInput`<sup>Optional</sup> <a name="EnforcementTypeInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput"></a>

```csharp
public string EnforcementTypeInput { get; }
```

- *Type:* string

---

##### `FilterVersionSelectorInput`<sup>Optional</sup> <a name="FilterVersionSelectorInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.filterVersionSelectorInput"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector FilterVersionSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector">GoogleModelArmorTemplateTemplateMetadataFilterVersionSelector</a>

---

##### `IgnorePartialInvocationFailuresInput`<sup>Optional</sup> <a name="IgnorePartialInvocationFailuresInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput"></a>

```csharp
public bool|IResolvable IgnorePartialInvocationFailuresInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogSanitizeOperationsInput`<sup>Optional</sup> <a name="LogSanitizeOperationsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput"></a>

```csharp
public bool|IResolvable LogSanitizeOperationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogTemplateOperationsInput`<sup>Optional</sup> <a name="LogTemplateOperationsInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput"></a>

```csharp
public bool|IResolvable LogTemplateOperationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ModalitiesInput`<sup>Optional</sup> <a name="ModalitiesInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.modalitiesInput"></a>

```csharp
public string[] ModalitiesInput { get; }
```

- *Type:* string[]

---

##### `MultiLanguageDetectionInput`<sup>Optional</sup> <a name="MultiLanguageDetectionInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection MultiLanguageDetectionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `CustomLlmResponseSafetyErrorCode`<sup>Required</sup> <a name="CustomLlmResponseSafetyErrorCode" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode"></a>

```csharp
public double CustomLlmResponseSafetyErrorCode { get; }
```

- *Type:* double

---

##### `CustomLlmResponseSafetyErrorMessage`<sup>Required</sup> <a name="CustomLlmResponseSafetyErrorMessage" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage"></a>

```csharp
public string CustomLlmResponseSafetyErrorMessage { get; }
```

- *Type:* string

---

##### `CustomPromptSafetyErrorCode`<sup>Required</sup> <a name="CustomPromptSafetyErrorCode" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode"></a>

```csharp
public double CustomPromptSafetyErrorCode { get; }
```

- *Type:* double

---

##### `CustomPromptSafetyErrorMessage`<sup>Required</sup> <a name="CustomPromptSafetyErrorMessage" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage"></a>

```csharp
public string CustomPromptSafetyErrorMessage { get; }
```

- *Type:* string

---

##### `DataResidencyCompliant`<sup>Required</sup> <a name="DataResidencyCompliant" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.dataResidencyCompliant"></a>

```csharp
public bool|IResolvable DataResidencyCompliant { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnforcementType`<sup>Required</sup> <a name="EnforcementType" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType"></a>

```csharp
public string EnforcementType { get; }
```

- *Type:* string

---

##### `IgnorePartialInvocationFailures`<sup>Required</sup> <a name="IgnorePartialInvocationFailures" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures"></a>

```csharp
public bool|IResolvable IgnorePartialInvocationFailures { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogSanitizeOperations`<sup>Required</sup> <a name="LogSanitizeOperations" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations"></a>

```csharp
public bool|IResolvable LogSanitizeOperations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogTemplateOperations`<sup>Required</sup> <a name="LogTemplateOperations" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations"></a>

```csharp
public bool|IResolvable LogTemplateOperations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Modalities`<sup>Required</sup> <a name="Modalities" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.modalities"></a>

```csharp
public string[] Modalities { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorTemplateTemplateMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

---


### GoogleModelArmorTemplateTimeoutsOutputReference <a name="GoogleModelArmorTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorTemplateTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>

---



