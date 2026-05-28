# `googleStorageAnywhereCache` Submodule <a name="`googleStorageAnywhereCache` Submodule" id="@cdktn/provider-google-beta.googleStorageAnywhereCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageAnywhereCache <a name="GoogleStorageAnywhereCache" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache google_storage_anywhere_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageAnywhereCache(Construct Scope, string Id, GoogleStorageAnywhereCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig">GoogleStorageAnywhereCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig">GoogleStorageAnywhereCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetAdmissionPolicy">ResetAdmissionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetIngestOnWrite">ResetIngestOnWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageAnywhereCacheTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts">GoogleStorageAnywhereCacheTimeouts</a>

---

##### `ResetAdmissionPolicy` <a name="ResetAdmissionPolicy" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetAdmissionPolicy"></a>

```csharp
private void ResetAdmissionPolicy()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngestOnWrite` <a name="ResetIngestOnWrite" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetIngestOnWrite"></a>

```csharp
private void ResetIngestOnWrite()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleStorageAnywhereCache resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageAnywhereCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageAnywhereCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageAnywhereCache.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleStorageAnywhereCache.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleStorageAnywhereCache resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageAnywhereCache to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageAnywhereCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageAnywhereCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.anywhereCacheId">AnywhereCacheId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.pendingUpdate">PendingUpdate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference">GoogleStorageAnywhereCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.admissionPolicyInput">AdmissionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ingestOnWriteInput">IngestOnWriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts">GoogleStorageAnywhereCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.admissionPolicy">AdmissionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ingestOnWrite">IngestOnWrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnywhereCacheId`<sup>Required</sup> <a name="AnywhereCacheId" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.anywhereCacheId"></a>

```csharp
public string AnywhereCacheId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `PendingUpdate`<sup>Required</sup> <a name="PendingUpdate" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.pendingUpdate"></a>

```csharp
public IResolvable PendingUpdate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.timeouts"></a>

```csharp
public GoogleStorageAnywhereCacheTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference">GoogleStorageAnywhereCacheTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AdmissionPolicyInput`<sup>Optional</sup> <a name="AdmissionPolicyInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.admissionPolicyInput"></a>

```csharp
public string AdmissionPolicyInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngestOnWriteInput`<sup>Optional</sup> <a name="IngestOnWriteInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ingestOnWriteInput"></a>

```csharp
public bool|IResolvable IngestOnWriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleStorageAnywhereCacheTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts">GoogleStorageAnywhereCacheTimeouts</a>

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AdmissionPolicy`<sup>Required</sup> <a name="AdmissionPolicy" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.admissionPolicy"></a>

```csharp
public string AdmissionPolicy { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngestOnWrite`<sup>Required</sup> <a name="IngestOnWrite" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ingestOnWrite"></a>

```csharp
public bool|IResolvable IngestOnWrite { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageAnywhereCacheConfig <a name="GoogleStorageAnywhereCacheConfig" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageAnywhereCacheConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string Zone,
    string AdmissionPolicy = null,
    string DeletionPolicy = null,
    string Id = null,
    bool|IResolvable IngestOnWrite = null,
    GoogleStorageAnywhereCacheTimeouts Timeouts = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.bucket">Bucket</a></code> | <code>string</code> | A reference to Bucket resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.zone">Zone</a></code> | <code>string</code> | The zone in which the cache instance needs to be created. For example, 'us-central1-a.'. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.admissionPolicy">AdmissionPolicy</a></code> | <code>string</code> | The cache admission policy dictates whether a block should be inserted upon a cache miss. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#id GoogleStorageAnywhereCache#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.ingestOnWrite">IngestOnWrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not the cache ingests data as the data is written to the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts">GoogleStorageAnywhereCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

A reference to Bucket resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#bucket GoogleStorageAnywhereCache#bucket}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone in which the cache instance needs to be created. For example, 'us-central1-a.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#zone GoogleStorageAnywhereCache#zone}

---

##### `AdmissionPolicy`<sup>Optional</sup> <a name="AdmissionPolicy" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.admissionPolicy"></a>

```csharp
public string AdmissionPolicy { get; set; }
```

- *Type:* string

The cache admission policy dictates whether a block should be inserted upon a cache miss.

Default value: "admit-on-first-miss" Possible values: ["admit-on-first-miss", "admit-on-second-miss"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#admission_policy GoogleStorageAnywhereCache#admission_policy}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#deletion_policy GoogleStorageAnywhereCache#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#id GoogleStorageAnywhereCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngestOnWrite`<sup>Optional</sup> <a name="IngestOnWrite" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.ingestOnWrite"></a>

```csharp
public bool|IResolvable IngestOnWrite { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not the cache ingests data as the data is written to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#ingest_on_write GoogleStorageAnywhereCache#ingest_on_write}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.timeouts"></a>

```csharp
public GoogleStorageAnywhereCacheTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts">GoogleStorageAnywhereCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#timeouts GoogleStorageAnywhereCache#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL of all cache entries in whole seconds. e.g., "7200s". It defaults to '86400s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#ttl GoogleStorageAnywhereCache#ttl}

---

### GoogleStorageAnywhereCacheTimeouts <a name="GoogleStorageAnywhereCacheTimeouts" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageAnywhereCacheTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#create GoogleStorageAnywhereCache#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#delete GoogleStorageAnywhereCache#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#update GoogleStorageAnywhereCache#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#create GoogleStorageAnywhereCache#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#delete GoogleStorageAnywhereCache#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_storage_anywhere_cache#update GoogleStorageAnywhereCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageAnywhereCacheTimeoutsOutputReference <a name="GoogleStorageAnywhereCacheTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleStorageAnywhereCacheTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts">GoogleStorageAnywhereCacheTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageAnywhereCacheTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleStorageAnywhereCache.GoogleStorageAnywhereCacheTimeouts">GoogleStorageAnywhereCacheTimeouts</a>

---



