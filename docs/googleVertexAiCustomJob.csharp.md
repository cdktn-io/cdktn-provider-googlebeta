# `googleVertexAiCustomJob` Submodule <a name="`googleVertexAiCustomJob` Submodule" id="@cdktn/provider-google-beta.googleVertexAiCustomJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiCustomJob <a name="GoogleVertexAiCustomJob" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job google_vertex_ai_custom_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJob(Construct Scope, string Id, GoogleVertexAiCustomJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig">GoogleVertexAiCustomJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig">GoogleVertexAiCustomJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiCustomJobEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec"></a>

```csharp
private void PutJobSpec(GoogleVertexAiCustomJobJobSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiCustomJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiCustomJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiCustomJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiCustomJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiCustomJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiCustomJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiCustomJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiCustomJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiCustomJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiCustomJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference">GoogleVertexAiCustomJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList">GoogleVertexAiCustomJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference">GoogleVertexAiCustomJobJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference">GoogleVertexAiCustomJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.webAccessUris">WebAccessUris</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpecInput">JobSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiCustomJobEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference">GoogleVertexAiCustomJobEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.error"></a>

```csharp
public GoogleVertexAiCustomJobErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList">GoogleVertexAiCustomJobErrorList</a>

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecOutputReference JobSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference">GoogleVertexAiCustomJobJobSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeouts"></a>

```csharp
public GoogleVertexAiCustomJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference">GoogleVertexAiCustomJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WebAccessUris`<sup>Required</sup> <a name="WebAccessUris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.webAccessUris"></a>

```csharp
public StringMap WebAccessUris { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiCustomJobEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpecInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpec JobSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiCustomJobConfig <a name="GoogleVertexAiCustomJobConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    GoogleVertexAiCustomJobJobSpec JobSpec,
    string Region,
    string DeletionPolicy = null,
    GoogleVertexAiCustomJobEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleVertexAiCustomJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the CustomJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.region">Region</a></code> | <code>string</code> | The Google Cloud region to run the custom job in. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize CustomJobs. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the CustomJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#display_name GoogleVertexAiCustomJob#display_name}

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.jobSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpec JobSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#job_spec GoogleVertexAiCustomJob#job_spec}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Google Cloud region to run the custom job in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#region GoogleVertexAiCustomJob#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#deletion_policy GoogleVertexAiCustomJob#deletion_policy}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiCustomJobEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#encryption_spec GoogleVertexAiCustomJob#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize CustomJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#labels GoogleVertexAiCustomJob#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiCustomJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeouts GoogleVertexAiCustomJob#timeouts}

---

### GoogleVertexAiCustomJobEncryptionSpec <a name="GoogleVertexAiCustomJobEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#kms_key_name GoogleVertexAiCustomJob#kms_key_name}

---

### GoogleVertexAiCustomJobError <a name="GoogleVertexAiCustomJobError" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobError {

};
```


### GoogleVertexAiCustomJobJobSpec <a name="GoogleVertexAiCustomJobJobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpec {
    IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] WorkerPoolSpecs,
    GoogleVertexAiCustomJobJobSpecBaseOutputDirectory BaseOutputDirectory = null,
    bool|IResolvable EnableDashboardAccess = null,
    bool|IResolvable EnableWebAccess = null,
    string Network = null,
    GoogleVertexAiCustomJobJobSpecPscInterfaceConfig PscInterfaceConfig = null,
    string[] ReservedIpRanges = null,
    GoogleVertexAiCustomJobJobSpecScheduling Scheduling = null,
    string ServiceAccount = null,
    string Tensorboard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.workerPoolSpecs">WorkerPoolSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | worker_pool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.baseOutputDirectory">BaseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | base_output_directory block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableDashboardAccess">EnableDashboardAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether you want Vertex AI to enable access to the customized dashboard in training chief container. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableWebAccess">EnableWebAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether you want Vertex AI to enable interactive shell access to training containers. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.network">Network</a></code> | <code>string</code> | The full name of the Compute Engine network to which the Job should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this job. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Specifies the service account for workload run-as account. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.tensorboard">Tensorboard</a></code> | <code>string</code> | The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs. |

---

##### `WorkerPoolSpecs`<sup>Required</sup> <a name="WorkerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.workerPoolSpecs"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] WorkerPoolSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

worker_pool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#worker_pool_specs GoogleVertexAiCustomJob#worker_pool_specs}

---

##### `BaseOutputDirectory`<sup>Optional</sup> <a name="BaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.baseOutputDirectory"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecBaseOutputDirectory BaseOutputDirectory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

base_output_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#base_output_directory GoogleVertexAiCustomJob#base_output_directory}

---

##### `EnableDashboardAccess`<sup>Optional</sup> <a name="EnableDashboardAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableDashboardAccess"></a>

```csharp
public bool|IResolvable EnableDashboardAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether you want Vertex AI to enable access to the customized dashboard in training chief container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_dashboard_access GoogleVertexAiCustomJob#enable_dashboard_access}

---

##### `EnableWebAccess`<sup>Optional</sup> <a name="EnableWebAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableWebAccess"></a>

```csharp
public bool|IResolvable EnableWebAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether you want Vertex AI to enable interactive shell access to training containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_web_access GoogleVertexAiCustomJob#enable_web_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Compute Engine network to which the Job should be peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network GoogleVertexAiCustomJob#network}

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.pscInterfaceConfig"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecPscInterfaceConfig PscInterfaceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#psc_interface_config GoogleVertexAiCustomJob#psc_interface_config}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; set; }
```

- *Type:* string[]

A list of names for the reserved ip ranges under the VPC network that can be used for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reserved_ip_ranges GoogleVertexAiCustomJob#reserved_ip_ranges}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.scheduling"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#scheduling GoogleVertexAiCustomJob#scheduling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Specifies the service account for workload run-as account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#service_account GoogleVertexAiCustomJob#service_account}

---

##### `Tensorboard`<sup>Optional</sup> <a name="Tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.tensorboard"></a>

```csharp
public string Tensorboard { get; set; }
```

- *Type:* string

The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tensorboard GoogleVertexAiCustomJob#tensorboard}

---

### GoogleVertexAiCustomJobJobSpecBaseOutputDirectory <a name="GoogleVertexAiCustomJobJobSpecBaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecBaseOutputDirectory {
    string OutputUriPrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | Cloud Storage folder URL to store the output. |

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; set; }
```

- *Type:* string

Cloud Storage folder URL to store the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#output_uri_prefix GoogleVertexAiCustomJob#output_uri_prefix}

---

### GoogleVertexAiCustomJobJobSpecPscInterfaceConfig <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecPscInterfaceConfig {
    IResolvable|GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs = null,
    string NetworkAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The name of the attachment to connect to. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#dns_peering_configs GoogleVertexAiCustomJob#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The name of the attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network_attachment GoogleVertexAiCustomJob#network_attachment}

---

### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs {
    string Domain,
    string TargetNetwork,
    string TargetProject
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#domain GoogleVertexAiCustomJob#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; set; }
```

- *Type:* string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_network GoogleVertexAiCustomJob#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_project GoogleVertexAiCustomJob#target_project}

---

### GoogleVertexAiCustomJobJobSpecScheduling <a name="GoogleVertexAiCustomJobJobSpecScheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecScheduling {
    bool|IResolvable DisableRetries = null,
    string MaxWaitDuration = null,
    bool|IResolvable RestartJobOnWorkerRestart = null,
    string Strategy = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.disableRetries">DisableRetries</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the job should retry for internal errors after the job starts running. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.maxWaitDuration">MaxWaitDuration</a></code> | <code>string</code> | The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart">RestartJobOnWorkerRestart</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Restarts the entire CustomJob if a worker gets restarted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.strategy">Strategy</a></code> | <code>string</code> | This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.timeout">Timeout</a></code> | <code>string</code> | The maximum job running time. |

---

##### `DisableRetries`<sup>Optional</sup> <a name="DisableRetries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.disableRetries"></a>

```csharp
public bool|IResolvable DisableRetries { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the job should retry for internal errors after the job starts running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disable_retries GoogleVertexAiCustomJob#disable_retries}

---

##### `MaxWaitDuration`<sup>Optional</sup> <a name="MaxWaitDuration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.maxWaitDuration"></a>

```csharp
public string MaxWaitDuration { get; set; }
```

- *Type:* string

The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#max_wait_duration GoogleVertexAiCustomJob#max_wait_duration}

---

##### `RestartJobOnWorkerRestart`<sup>Optional</sup> <a name="RestartJobOnWorkerRestart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart"></a>

```csharp
public bool|IResolvable RestartJobOnWorkerRestart { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Restarts the entire CustomJob if a worker gets restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#restart_job_on_worker_restart GoogleVertexAiCustomJob#restart_job_on_worker_restart}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.strategy"></a>

```csharp
public string Strategy { get; set; }
```

- *Type:* string

This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#strategy GoogleVertexAiCustomJob#strategy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

The maximum job running time.

The default is 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeout GoogleVertexAiCustomJob#timeout}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs {
    GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec ContainerSpec = null,
    GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec DiskSpec = null,
    IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] LustreMounts = null,
    GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec MachineSpec = null,
    IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] NfsMounts = null,
    GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec PythonPackageSpec = null,
    double ReplicaCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts">LustreMounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | lustre_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts">NfsMounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | nfs_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec">PythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | python_package_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | The number of worker replicas to use for this worker pool. |

---

##### `ContainerSpec`<sup>Optional</sup> <a name="ContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec ContainerSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#container_spec GoogleVertexAiCustomJob#container_spec}

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec DiskSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disk_spec GoogleVertexAiCustomJob#disk_spec}

---

##### `LustreMounts`<sup>Optional</sup> <a name="LustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] LustreMounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

lustre_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#lustre_mounts GoogleVertexAiCustomJob#lustre_mounts}

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec MachineSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_spec GoogleVertexAiCustomJob#machine_spec}

---

##### `NfsMounts`<sup>Optional</sup> <a name="NfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] NfsMounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

nfs_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#nfs_mounts GoogleVertexAiCustomJob#nfs_mounts}

---

##### `PythonPackageSpec`<sup>Optional</sup> <a name="PythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec PythonPackageSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

python_package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_package_spec GoogleVertexAiCustomJob#python_package_spec}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; set; }
```

- *Type:* double

The number of worker replicas to use for this worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#replica_count GoogleVertexAiCustomJob#replica_count}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec {
    string ImageUri,
    string[] Args = null,
    string[] Command = null,
    IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri">ImageUri</a></code> | <code>string</code> | The URI of a container image in the Container Registry that is to be run on each worker replica. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args">Args</a></code> | <code>string[]</code> | The arguments to be passed when starting the container. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command">Command</a></code> | <code>string[]</code> | The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env">Env</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | env block. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The URI of a container image in the Container Registry that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#image_uri GoogleVertexAiCustomJob#image_uri}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to be passed when starting the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#command GoogleVertexAiCustomJob#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] Env { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value">Value</a></code> | <code>string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec {
    double BootDiskSizeGb = null,
    string BootDiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | Type of the disk. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_size_gb GoogleVertexAiCustomJob#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

Type of the disk.

The default value depends on the machine type. Valid values include: "pd-ssd", "pd-standard", "pd-balanced", and "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_type GoogleVertexAiCustomJob#boot_disk_type}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts {
    string Filesystem,
    string InstanceIp,
    string MountPoint,
    string VolumeHandle
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem">Filesystem</a></code> | <code>string</code> | The name of the Lustre filesystem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp">InstanceIp</a></code> | <code>string</code> | IP address of the Lustre instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint">MountPoint</a></code> | <code>string</code> | Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle">VolumeHandle</a></code> | <code>string</code> | The unique identifier of the Lustre volume. |

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem"></a>

```csharp
public string Filesystem { get; set; }
```

- *Type:* string

The name of the Lustre filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#filesystem GoogleVertexAiCustomJob#filesystem}

---

##### `InstanceIp`<sup>Required</sup> <a name="InstanceIp" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp"></a>

```csharp
public string InstanceIp { get; set; }
```

- *Type:* string

IP address of the Lustre instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#instance_ip GoogleVertexAiCustomJob#instance_ip}

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}

---

##### `VolumeHandle`<sup>Required</sup> <a name="VolumeHandle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle"></a>

```csharp
public string VolumeHandle { get; set; }
```

- *Type:* string

The unique identifier of the Lustre volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#volume_handle GoogleVertexAiCustomJob#volume_handle}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec {
    double AcceleratorCount = null,
    string AcceleratorType = null,
    string MachineType = null,
    GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity ReservationAffinity = null,
    string TpuTopology = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of accelerator(s) that may be attached to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType">MachineType</a></code> | <code>string</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology">TpuTopology</a></code> | <code>string</code> | The topology of the TPUs. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_count GoogleVertexAiCustomJob#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of accelerator(s) that may be attached to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_type GoogleVertexAiCustomJob#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The type of the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_type GoogleVertexAiCustomJob#machine_type}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity GoogleVertexAiCustomJob#reservation_affinity}

---

##### `TpuTopology`<sup>Optional</sup> <a name="TpuTopology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology"></a>

```csharp
public string TpuTopology { get; set; }
```

- *Type:* string

The topology of the TPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tpu_topology GoogleVertexAiCustomJob#tpu_topology}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity {
    string ReservationAffinityType,
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>string</code> | Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```csharp
public string ReservationAffinityType { get; set; }
```

- *Type:* string

Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity_type GoogleVertexAiCustomJob#reservation_affinity_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#key GoogleVertexAiCustomJob#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#values GoogleVertexAiCustomJob#values}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts {
    string MountPoint,
    string Path,
    string Server
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint">MountPoint</a></code> | <code>string</code> | Destination mount path. The path must be absolute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path">Path</a></code> | <code>string</code> | Source path exported from NFS database. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server">Server</a></code> | <code>string</code> | IP address of the NFS server. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Destination mount path. The path must be absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Source path exported from NFS database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#path GoogleVertexAiCustomJob#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#server GoogleVertexAiCustomJob#server}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec {
    string ExecutorImageUri,
    string[] PackageUris,
    string PythonModule,
    string[] Args = null,
    IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri">ExecutorImageUri</a></code> | <code>string</code> | The URI of a container image in Artifact Registry that will run the provided Python package. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris">PackageUris</a></code> | <code>string[]</code> | The Google Cloud Storage location of the Python package files which are the training program and its dependent packages. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule">PythonModule</a></code> | <code>string</code> | The Python module name to run after installing the packages. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args">Args</a></code> | <code>string[]</code> | Command line arguments to be passed to the Python task. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env">Env</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | env block. |

---

##### `ExecutorImageUri`<sup>Required</sup> <a name="ExecutorImageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri"></a>

```csharp
public string ExecutorImageUri { get; set; }
```

- *Type:* string

The URI of a container image in Artifact Registry that will run the provided Python package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#executor_image_uri GoogleVertexAiCustomJob#executor_image_uri}

---

##### `PackageUris`<sup>Required</sup> <a name="PackageUris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris"></a>

```csharp
public string[] PackageUris { get; set; }
```

- *Type:* string[]

The Google Cloud Storage location of the Python package files which are the training program and its dependent packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#package_uris GoogleVertexAiCustomJob#package_uris}

---

##### `PythonModule`<sup>Required</sup> <a name="PythonModule" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule"></a>

```csharp
public string PythonModule { get; set; }
```

- *Type:* string

The Python module name to run after installing the packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_module GoogleVertexAiCustomJob#python_module}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Command line arguments to be passed to the Python task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] Env { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value">Value</a></code> | <code>string</code> | Value of the environment variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}

---

### GoogleVertexAiCustomJobTimeouts <a name="GoogleVertexAiCustomJobTimeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiCustomJobEncryptionSpecOutputReference <a name="GoogleVertexAiCustomJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---


### GoogleVertexAiCustomJobErrorList <a name="GoogleVertexAiCustomJobErrorList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get"></a>

```csharp
private GoogleVertexAiCustomJobErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiCustomJobErrorOutputReference <a name="GoogleVertexAiCustomJobErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError">GoogleVertexAiCustomJobError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError">GoogleVertexAiCustomJobError</a>

---


### GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference <a name="GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput">OutputUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputUriPrefixInput`<sup>Optional</sup> <a name="OutputUriPrefixInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput"></a>

```csharp
public string OutputUriPrefixInput { get; }
```

- *Type:* string

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecBaseOutputDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---


### GoogleVertexAiCustomJobJobSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory">PutBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs">PutWorkerPoolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory">ResetBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess">ResetEnableDashboardAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess">ResetEnableWebAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetTensorboard">ResetTensorboard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseOutputDirectory` <a name="PutBaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory"></a>

```csharp
private void PutBaseOutputDirectory(GoogleVertexAiCustomJobJobSpecBaseOutputDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig"></a>

```csharp
private void PutPscInterfaceConfig(GoogleVertexAiCustomJobJobSpecPscInterfaceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling"></a>

```csharp
private void PutScheduling(GoogleVertexAiCustomJobJobSpecScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---

##### `PutWorkerPoolSpecs` <a name="PutWorkerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs"></a>

```csharp
private void PutWorkerPoolSpecs(IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---

##### `ResetBaseOutputDirectory` <a name="ResetBaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory"></a>

```csharp
private void ResetBaseOutputDirectory()
```

##### `ResetEnableDashboardAccess` <a name="ResetEnableDashboardAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess"></a>

```csharp
private void ResetEnableDashboardAccess()
```

##### `ResetEnableWebAccess` <a name="ResetEnableWebAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess"></a>

```csharp
private void ResetEnableWebAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig"></a>

```csharp
private void ResetPscInterfaceConfig()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges"></a>

```csharp
private void ResetReservedIpRanges()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTensorboard` <a name="ResetTensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetTensorboard"></a>

```csharp
private void ResetTensorboard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory">BaseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference">GoogleVertexAiCustomJobJobSpecSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs">WorkerPoolSpecs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput">BaseOutputDirectoryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput">EnableDashboardAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput">EnableWebAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboardInput">TensorboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput">WorkerPoolSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess">EnableDashboardAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccess">EnableWebAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboard">Tensorboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseOutputDirectory`<sup>Required</sup> <a name="BaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference BaseOutputDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a>

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference PscInterfaceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.scheduling"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference">GoogleVertexAiCustomJobJobSpecSchedulingOutputReference</a>

---

##### `WorkerPoolSpecs`<sup>Required</sup> <a name="WorkerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList WorkerPoolSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList</a>

---

##### `BaseOutputDirectoryInput`<sup>Optional</sup> <a name="BaseOutputDirectoryInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecBaseOutputDirectory BaseOutputDirectoryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `EnableDashboardAccessInput`<sup>Optional</sup> <a name="EnableDashboardAccessInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput"></a>

```csharp
public bool|IResolvable EnableDashboardAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableWebAccessInput`<sup>Optional</sup> <a name="EnableWebAccessInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput"></a>

```csharp
public bool|IResolvable EnableWebAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecPscInterfaceConfig PscInterfaceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput"></a>

```csharp
public string[] ReservedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.schedulingInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TensorboardInput`<sup>Optional</sup> <a name="TensorboardInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboardInput"></a>

```csharp
public string TensorboardInput { get; }
```

- *Type:* string

---

##### `WorkerPoolSpecsInput`<sup>Optional</sup> <a name="WorkerPoolSpecsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] WorkerPoolSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---

##### `EnableDashboardAccess`<sup>Required</sup> <a name="EnableDashboardAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess"></a>

```csharp
public bool|IResolvable EnableDashboardAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableWebAccess`<sup>Required</sup> <a name="EnableWebAccess" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccess"></a>

```csharp
public bool|IResolvable EnableWebAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Tensorboard`<sup>Required</sup> <a name="Tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboard"></a>

```csharp
public string Tensorboard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```csharp
private GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```csharp
public string TargetNetworkInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```csharp
private void PutDnsPeeringConfigs(IResolvable|GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```csharp
private void ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList DnsPeeringConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecPscInterfaceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---


### GoogleVertexAiCustomJobJobSpecSchedulingOutputReference <a name="GoogleVertexAiCustomJobJobSpecSchedulingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries">ResetDisableRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration">ResetMaxWaitDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart">ResetRestartJobOnWorkerRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableRetries` <a name="ResetDisableRetries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries"></a>

```csharp
private void ResetDisableRetries()
```

##### `ResetMaxWaitDuration` <a name="ResetMaxWaitDuration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration"></a>

```csharp
private void ResetMaxWaitDuration()
```

##### `ResetRestartJobOnWorkerRestart` <a name="ResetRestartJobOnWorkerRestart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart"></a>

```csharp
private void ResetRestartJobOnWorkerRestart()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy"></a>

```csharp
private void ResetStrategy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput">DisableRetriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput">MaxWaitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput">RestartJobOnWorkerRestartInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput">StrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries">DisableRetries</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration">MaxWaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart">RestartJobOnWorkerRestart</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableRetriesInput`<sup>Optional</sup> <a name="DisableRetriesInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput"></a>

```csharp
public bool|IResolvable DisableRetriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxWaitDurationInput`<sup>Optional</sup> <a name="MaxWaitDurationInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput"></a>

```csharp
public string MaxWaitDurationInput { get; }
```

- *Type:* string

---

##### `RestartJobOnWorkerRestartInput`<sup>Optional</sup> <a name="RestartJobOnWorkerRestartInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput"></a>

```csharp
public bool|IResolvable RestartJobOnWorkerRestartInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput"></a>

```csharp
public string StrategyInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `DisableRetries`<sup>Required</sup> <a name="DisableRetries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries"></a>

```csharp
public bool|IResolvable DisableRetries { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxWaitDuration`<sup>Required</sup> <a name="MaxWaitDuration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration"></a>

```csharp
public string MaxWaitDuration { get; }
```

- *Type:* string

---

##### `RestartJobOnWorkerRestart`<sup>Required</sup> <a name="RestartJobOnWorkerRestart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart"></a>

```csharp
public bool|IResolvable RestartJobOnWorkerRestart { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get"></a>

```csharp
private GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv"></a>

```csharp
private void PutEnv(IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput">EnvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList Env { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] EnvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get"></a>

```csharp
private GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get"></a>

```csharp
private GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput">FilesystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput">InstanceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput">VolumeHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem">Filesystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp">InstanceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle">VolumeHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesystemInput`<sup>Optional</sup> <a name="FilesystemInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput"></a>

```csharp
public string FilesystemInput { get; }
```

- *Type:* string

---

##### `InstanceIpInput`<sup>Optional</sup> <a name="InstanceIpInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput"></a>

```csharp
public string InstanceIpInput { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `VolumeHandleInput`<sup>Optional</sup> <a name="VolumeHandleInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput"></a>

```csharp
public string VolumeHandleInput { get; }
```

- *Type:* string

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem"></a>

```csharp
public string Filesystem { get; }
```

- *Type:* string

---

##### `InstanceIp`<sup>Required</sup> <a name="InstanceIp" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp"></a>

```csharp
public string InstanceIp { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `VolumeHandle`<sup>Required</sup> <a name="VolumeHandle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle"></a>

```csharp
public string VolumeHandle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology">ResetTpuTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetTpuTopology` <a name="ResetTpuTopology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology"></a>

```csharp
private void ResetTpuTopology()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput">TpuTopologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology">TpuTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `TpuTopologyInput`<sup>Optional</sup> <a name="TpuTopologyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput"></a>

```csharp
public string TpuTopologyInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `TpuTopology`<sup>Required</sup> <a name="TpuTopology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology"></a>

```csharp
public string TpuTopology { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">ReservationAffinityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityTypeInput`<sup>Optional</sup> <a name="ReservationAffinityTypeInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```csharp
public string ReservationAffinityTypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```csharp
public string ReservationAffinityType { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get"></a>

```csharp
private GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec">PutContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts">PutLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts">PutNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec">PutPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec">ResetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts">ResetLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts">ResetNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec">ResetPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerSpec` <a name="PutContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec"></a>

```csharp
private void PutContainerSpec(GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec"></a>

```csharp
private void PutDiskSpec(GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `PutLustreMounts` <a name="PutLustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts"></a>

```csharp
private void PutLustreMounts(IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec"></a>

```csharp
private void PutMachineSpec(GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `PutNfsMounts` <a name="PutNfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts"></a>

```csharp
private void PutNfsMounts(IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---

##### `PutPythonPackageSpec` <a name="PutPythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec"></a>

```csharp
private void PutPythonPackageSpec(GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `ResetContainerSpec` <a name="ResetContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec"></a>

```csharp
private void ResetContainerSpec()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec"></a>

```csharp
private void ResetDiskSpec()
```

##### `ResetLustreMounts` <a name="ResetLustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts"></a>

```csharp
private void ResetLustreMounts()
```

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec"></a>

```csharp
private void ResetMachineSpec()
```

##### `ResetNfsMounts` <a name="ResetNfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts"></a>

```csharp
private void ResetNfsMounts()
```

##### `ResetPythonPackageSpec` <a name="ResetPythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec"></a>

```csharp
private void ResetPythonPackageSpec()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount"></a>

```csharp
private void ResetReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts">LustreMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts">NfsMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec">PythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput">ContainerSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput">LustreMountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput">NfsMountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput">PythonPackageSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput">ReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference ContainerSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference DiskSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a>

---

##### `LustreMounts`<sup>Required</sup> <a name="LustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList LustreMounts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference MachineSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a>

---

##### `NfsMounts`<sup>Required</sup> <a name="NfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList NfsMounts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a>

---

##### `PythonPackageSpec`<sup>Required</sup> <a name="PythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference PythonPackageSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a>

---

##### `ContainerSpecInput`<sup>Optional</sup> <a name="ContainerSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec ContainerSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec DiskSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `LustreMountsInput`<sup>Optional</sup> <a name="LustreMountsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] LustreMountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec MachineSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `NfsMountsInput`<sup>Optional</sup> <a name="NfsMountsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] NfsMountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---

##### `PythonPackageSpecInput`<sup>Optional</sup> <a name="PythonPackageSpecInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec PythonPackageSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput"></a>

```csharp
public double ReplicaCountInput { get; }
```

- *Type:* double

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get"></a>

```csharp
private GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv"></a>

```csharp
private void PutEnv(IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput">EnvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput">ExecutorImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput">PackageUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput">PythonModuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri">ExecutorImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris">PackageUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule">PythonModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList Env { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] EnvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---

##### `ExecutorImageUriInput`<sup>Optional</sup> <a name="ExecutorImageUriInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput"></a>

```csharp
public string ExecutorImageUriInput { get; }
```

- *Type:* string

---

##### `PackageUrisInput`<sup>Optional</sup> <a name="PackageUrisInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput"></a>

```csharp
public string[] PackageUrisInput { get; }
```

- *Type:* string[]

---

##### `PythonModuleInput`<sup>Optional</sup> <a name="PythonModuleInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput"></a>

```csharp
public string PythonModuleInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `ExecutorImageUri`<sup>Required</sup> <a name="ExecutorImageUri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri"></a>

```csharp
public string ExecutorImageUri { get; }
```

- *Type:* string

---

##### `PackageUris`<sup>Required</sup> <a name="PackageUris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris"></a>

```csharp
public string[] PackageUris { get; }
```

- *Type:* string[]

---

##### `PythonModule`<sup>Required</sup> <a name="PythonModule" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule"></a>

```csharp
public string PythonModule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---


### GoogleVertexAiCustomJobTimeoutsOutputReference <a name="GoogleVertexAiCustomJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiCustomJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiCustomJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---



