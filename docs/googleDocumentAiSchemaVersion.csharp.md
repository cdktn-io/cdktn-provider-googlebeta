# `googleDocumentAiSchemaVersion` Submodule <a name="`googleDocumentAiSchemaVersion` Submodule" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiSchemaVersion <a name="GoogleDocumentAiSchemaVersion" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersion(Construct Scope, string Id, GoogleDocumentAiSchemaVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig">GoogleDocumentAiSchemaVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig">GoogleDocumentAiSchemaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema"></a>

```csharp
private void PutSchema(GoogleDocumentAiSchemaVersionSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDocumentAiSchemaVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDocumentAiSchemaVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDocumentAiSchemaVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDocumentAiSchemaVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDocumentAiSchemaVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDocumentAiSchemaVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput">SchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId">SchemaId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts"></a>

```csharp
public GoogleDocumentAiSchemaVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput"></a>

```csharp
public string SchemaIdInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId"></a>

```csharp
public string SchemaId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiSchemaVersionConfig <a name="GoogleDocumentAiSchemaVersionConfig" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Location,
    GoogleDocumentAiSchemaVersionSchema Schema,
    string SchemaId,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleDocumentAiSchemaVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId">SchemaId</a></code> | <code>string</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#location GoogleDocumentAiSchemaVersion#location}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema GoogleDocumentAiSchemaVersion#schema}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId"></a>

```csharp
public string SchemaId { get; set; }
```

- *Type:* string

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema_id GoogleDocumentAiSchemaVersion#schema_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#deletion_policy GoogleDocumentAiSchemaVersion#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#labels GoogleDocumentAiSchemaVersion#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts"></a>

```csharp
public GoogleDocumentAiSchemaVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#timeouts GoogleDocumentAiSchemaVersion#timeouts}

---

### GoogleDocumentAiSchemaVersionSchema <a name="GoogleDocumentAiSchemaVersionSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchema {
    string Description = null,
    string DisplayName = null,
    string DocumentPrompt = null,
    IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypes[] EntityTypes = null,
    GoogleDocumentAiSchemaVersionSchemaMetadata Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description">Description</a></code> | <code>string</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName">DisplayName</a></code> | <code>string</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt">DocumentPrompt</a></code> | <code>string</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes">EntityTypes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | entity_types block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#description GoogleDocumentAiSchemaVersion#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `DocumentPrompt`<sup>Optional</sup> <a name="DocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```csharp
public string DocumentPrompt { get; set; }
```

- *Type:* string

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_prompt GoogleDocumentAiSchemaVersion#document_prompt}

---

##### `EntityTypes`<sup>Optional</sup> <a name="EntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypes[] EntityTypes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#entity_types GoogleDocumentAiSchemaVersion#entity_types}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#metadata GoogleDocumentAiSchemaVersion#metadata}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypes <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypes {
    string Name,
    string[] BaseTypes = null,
    string DisplayName = null,
    GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues EnumValues = null,
    IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[] Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name">Name</a></code> | <code>string</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">BaseTypes</a></code> | <code>string[]</code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName">DisplayName</a></code> | <code>string</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties">Properties</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | properties block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `BaseTypes`<sup>Optional</sup> <a name="BaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```csharp
public string[] BaseTypes { get; set; }
```

- *Type:* string[]

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#base_types GoogleDocumentAiSchemaVersion#base_types}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `EnumValues`<sup>Optional</sup> <a name="EnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues EnumValues { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#enum_values GoogleDocumentAiSchemaVersion#enum_values}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[] Properties { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#properties GoogleDocumentAiSchemaVersion#properties}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues {
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">Values</a></code> | <code>string[]</code> | The individual values that this enum values type can include. |

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#values GoogleDocumentAiSchemaVersion#values}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties {
    string Name,
    string ValueType,
    string DisplayName = null,
    string Method = null,
    string OccurrenceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">Name</a></code> | <code>string</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">ValueType</a></code> | <code>string</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">DisplayName</a></code> | <code>string</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">Method</a></code> | <code>string</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">OccurrenceType</a></code> | <code>string</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#value_type GoogleDocumentAiSchemaVersion#value_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#method GoogleDocumentAiSchemaVersion#method}

---

##### `OccurrenceType`<sup>Optional</sup> <a name="OccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```csharp
public string OccurrenceType { get; set; }
```

- *Type:* string

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#occurrence_type GoogleDocumentAiSchemaVersion#occurrence_type}

---

### GoogleDocumentAiSchemaVersionSchemaMetadata <a name="GoogleDocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaMetadata {
    bool|IResolvable DocumentAllowMultipleLabels = null,
    bool|IResolvable DocumentSplitter = null,
    bool|IResolvable PrefixedNamingOnProperties = null,
    bool|IResolvable SkipNamingValidation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">DocumentSplitter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, this will skip the naming format validation in the schema. |

---

##### `DocumentAllowMultipleLabels`<sup>Optional</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```csharp
public bool|IResolvable DocumentAllowMultipleLabels { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_allow_multiple_labels GoogleDocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `DocumentSplitter`<sup>Optional</sup> <a name="DocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```csharp
public bool|IResolvable DocumentSplitter { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_splitter GoogleDocumentAiSchemaVersion#document_splitter}

---

##### `PrefixedNamingOnProperties`<sup>Optional</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```csharp
public bool|IResolvable PrefixedNamingOnProperties { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#prefixed_naming_on_properties GoogleDocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `SkipNamingValidation`<sup>Optional</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```csharp
public bool|IResolvable SkipNamingValidation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#skip_naming_validation GoogleDocumentAiSchemaVersion#skip_naming_validation}

---

### GoogleDocumentAiSchemaVersionTimeouts <a name="GoogleDocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```csharp
private GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">PutEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">ResetBaseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">ResetEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnumValues` <a name="PutEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```csharp
private void PutEnumValues(GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```csharp
private void PutProperties(IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---

##### `ResetBaseTypes` <a name="ResetBaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```csharp
private void ResetBaseTypes()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnumValues` <a name="ResetEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```csharp
private void ResetEnumValues()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">BaseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">EnumValuesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">BaseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnumValues`<sup>Required</sup> <a name="EnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference EnumValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `BaseTypesInput`<sup>Optional</sup> <a name="BaseTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```csharp
public string[] BaseTypesInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnumValuesInput`<sup>Optional</sup> <a name="EnumValuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues EnumValuesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[] PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---

##### `BaseTypes`<sup>Required</sup> <a name="BaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```csharp
public string[] BaseTypes { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```csharp
private GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">ResetOccurrenceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetOccurrenceType` <a name="ResetOccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```csharp
private void ResetOccurrenceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">OccurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">OccurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OccurrenceTypeInput`<sup>Optional</sup> <a name="OccurrenceTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```csharp
public string OccurrenceTypeInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OccurrenceType`<sup>Required</sup> <a name="OccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```csharp
public string OccurrenceType { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>

---


### GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">ResetDocumentAllowMultipleLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">ResetDocumentSplitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">ResetPrefixedNamingOnProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">ResetSkipNamingValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocumentAllowMultipleLabels` <a name="ResetDocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```csharp
private void ResetDocumentAllowMultipleLabels()
```

##### `ResetDocumentSplitter` <a name="ResetDocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```csharp
private void ResetDocumentSplitter()
```

##### `ResetPrefixedNamingOnProperties` <a name="ResetPrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```csharp
private void ResetPrefixedNamingOnProperties()
```

##### `ResetSkipNamingValidation` <a name="ResetSkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```csharp
private void ResetSkipNamingValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">DocumentAllowMultipleLabelsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">DocumentSplitterInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">PrefixedNamingOnPropertiesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">SkipNamingValidationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">DocumentSplitter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocumentAllowMultipleLabelsInput`<sup>Optional</sup> <a name="DocumentAllowMultipleLabelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```csharp
public bool|IResolvable DocumentAllowMultipleLabelsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DocumentSplitterInput`<sup>Optional</sup> <a name="DocumentSplitterInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```csharp
public bool|IResolvable DocumentSplitterInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixedNamingOnPropertiesInput`<sup>Optional</sup> <a name="PrefixedNamingOnPropertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```csharp
public bool|IResolvable PrefixedNamingOnPropertiesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipNamingValidationInput`<sup>Optional</sup> <a name="SkipNamingValidationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```csharp
public bool|IResolvable SkipNamingValidationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DocumentAllowMultipleLabels`<sup>Required</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```csharp
public bool|IResolvable DocumentAllowMultipleLabels { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DocumentSplitter`<sup>Required</sup> <a name="DocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```csharp
public bool|IResolvable DocumentSplitter { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixedNamingOnProperties`<sup>Required</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```csharp
public bool|IResolvable PrefixedNamingOnProperties { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipNamingValidation`<sup>Required</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```csharp
public bool|IResolvable SkipNamingValidation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---


### GoogleDocumentAiSchemaVersionSchemaOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">ResetDocumentPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">ResetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```csharp
private void PutEntityTypes(IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```csharp
private void PutMetadata(GoogleDocumentAiSchemaVersionSchemaMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDocumentPrompt` <a name="ResetDocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```csharp
private void ResetDocumentPrompt()
```

##### `ResetEntityTypes` <a name="ResetEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```csharp
private void ResetEntityTypes()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">DocumentPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">DocumentPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaEntityTypesList EntityTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentPromptInput`<sup>Optional</sup> <a name="DocumentPromptInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```csharp
public string DocumentPromptInput { get; }
```

- *Type:* string

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypes[] EntityTypesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchemaMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DocumentPrompt`<sup>Required</sup> <a name="DocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```csharp
public string DocumentPrompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```csharp
public GoogleDocumentAiSchemaVersionSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---


### GoogleDocumentAiSchemaVersionTimeoutsOutputReference <a name="GoogleDocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDocumentAiSchemaVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDocumentAiSchemaVersionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---



