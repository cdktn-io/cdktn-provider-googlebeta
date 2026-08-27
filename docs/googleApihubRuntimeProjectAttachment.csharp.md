# `googleApihubRuntimeProjectAttachment` Submodule <a name="`googleApihubRuntimeProjectAttachment` Submodule" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubRuntimeProjectAttachment <a name="GoogleApihubRuntimeProjectAttachment" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment google_apihub_runtime_project_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApihubRuntimeProjectAttachment(Construct Scope, string Id, GoogleApihubRuntimeProjectAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig">GoogleApihubRuntimeProjectAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig">GoogleApihubRuntimeProjectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApihubRuntimeProjectAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApihubRuntimeProjectAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApihubRuntimeProjectAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApihubRuntimeProjectAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApihubRuntimeProjectAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApihubRuntimeProjectAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApihubRuntimeProjectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApihubRuntimeProjectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference">GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput">RuntimeProjectAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectInput">RuntimeProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProject">RuntimeProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId">RuntimeProjectAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeouts"></a>

```csharp
public GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference">GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuntimeProjectAttachmentIdInput`<sup>Optional</sup> <a name="RuntimeProjectAttachmentIdInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput"></a>

```csharp
public string RuntimeProjectAttachmentIdInput { get; }
```

- *Type:* string

---

##### `RuntimeProjectInput`<sup>Optional</sup> <a name="RuntimeProjectInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectInput"></a>

```csharp
public string RuntimeProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleApihubRuntimeProjectAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RuntimeProject`<sup>Required</sup> <a name="RuntimeProject" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProject"></a>

```csharp
public string RuntimeProject { get; }
```

- *Type:* string

---

##### `RuntimeProjectAttachmentId`<sup>Required</sup> <a name="RuntimeProjectAttachmentId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId"></a>

```csharp
public string RuntimeProjectAttachmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubRuntimeProjectAttachmentConfig <a name="GoogleApihubRuntimeProjectAttachmentConfig" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApihubRuntimeProjectAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string RuntimeProject,
    string RuntimeProjectAttachmentId,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleApihubRuntimeProjectAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.location">Location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProject">RuntimeProject</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId">RuntimeProjectAttachmentId</a></code> | <code>string</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#location GoogleApihubRuntimeProjectAttachment#location}

---

##### `RuntimeProject`<sup>Required</sup> <a name="RuntimeProject" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProject"></a>

```csharp
public string RuntimeProject { get; set; }
```

- *Type:* string

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project GoogleApihubRuntimeProjectAttachment#runtime_project}

---

##### `RuntimeProjectAttachmentId`<sup>Required</sup> <a name="RuntimeProjectAttachmentId" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId"></a>

```csharp
public string RuntimeProjectAttachmentId { get; set; }
```

- *Type:* string

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project_attachment_id GoogleApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#deletion_policy GoogleApihubRuntimeProjectAttachment#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.timeouts"></a>

```csharp
public GoogleApihubRuntimeProjectAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#timeouts GoogleApihubRuntimeProjectAttachment#timeouts}

---

### GoogleApihubRuntimeProjectAttachmentTimeouts <a name="GoogleApihubRuntimeProjectAttachmentTimeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApihubRuntimeProjectAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#create GoogleApihubRuntimeProjectAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#delete GoogleApihubRuntimeProjectAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#create GoogleApihubRuntimeProjectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_apihub_runtime_project_attachment#delete GoogleApihubRuntimeProjectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference <a name="GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleApihubRuntimeProjectAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---



