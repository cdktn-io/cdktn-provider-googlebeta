# `googleFirebaseStorageDefaultBucket` Submodule <a name="`googleFirebaseStorageDefaultBucket` Submodule" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseStorageDefaultBucket <a name="GoogleFirebaseStorageDefaultBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket google_firebase_storage_default_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseStorageDefaultBucket(Construct Scope, string Id, GoogleFirebaseStorageDefaultBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig">GoogleFirebaseStorageDefaultBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig">GoogleFirebaseStorageDefaultBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirebaseStorageDefaultBucketTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseStorageDefaultBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseStorageDefaultBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseStorageDefaultBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseStorageDefaultBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseStorageDefaultBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseStorageDefaultBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseStorageDefaultBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket">Bucket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket"></a>

```csharp
public GoogleFirebaseStorageDefaultBucketBucketList Bucket { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts"></a>

```csharp
public GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleFirebaseStorageDefaultBucketTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseStorageDefaultBucketBucket <a name="GoogleFirebaseStorageDefaultBucketBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseStorageDefaultBucketBucket {

};
```


### GoogleFirebaseStorageDefaultBucketConfig <a name="GoogleFirebaseStorageDefaultBucketConfig" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseStorageDefaultBucketConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleFirebaseStorageDefaultBucketTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location">Location</a></code> | <code>string</code> | The ID of the location where the default Google Cloud Storage bucket will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The ID of the location where the default Google Cloud Storage bucket will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#location GoogleFirebaseStorageDefaultBucket#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#deletion_policy GoogleFirebaseStorageDefaultBucket#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts"></a>

```csharp
public GoogleFirebaseStorageDefaultBucketTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#timeouts GoogleFirebaseStorageDefaultBucket#timeouts}

---

### GoogleFirebaseStorageDefaultBucketTimeouts <a name="GoogleFirebaseStorageDefaultBucketTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseStorageDefaultBucketTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseStorageDefaultBucketBucketList <a name="GoogleFirebaseStorageDefaultBucketBucketList" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseStorageDefaultBucketBucketList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get"></a>

```csharp
private GoogleFirebaseStorageDefaultBucketBucketOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleFirebaseStorageDefaultBucketBucketOutputReference <a name="GoogleFirebaseStorageDefaultBucketBucketOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseStorageDefaultBucketBucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId">BucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId"></a>

```csharp
public string BucketId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseStorageDefaultBucketBucket InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a>

---


### GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference <a name="GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirebaseStorageDefaultBucketTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---



