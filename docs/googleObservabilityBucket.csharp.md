# `googleObservabilityBucket` Submodule <a name="`googleObservabilityBucket` Submodule" id="@cdktn/provider-google-beta.googleObservabilityBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleObservabilityBucket <a name="GoogleObservabilityBucket" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket google_observability_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleObservabilityBucket(Construct Scope, string Id, GoogleObservabilityBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig">GoogleObservabilityBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig">GoogleObservabilityBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putCmekSettings"></a>

```csharp
private void PutCmekSettings(GoogleObservabilityBucketCmekSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleObservabilityBucketTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a>

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetCmekSettings"></a>

```csharp
private void ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleObservabilityBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleObservabilityBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleObservabilityBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleObservabilityBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleObservabilityBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleObservabilityBucket resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleObservabilityBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleObservabilityBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleObservabilityBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference">GoogleObservabilityBucketCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.purgeTime">PurgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference">GoogleObservabilityBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketIdInput">BucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketId">BucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettings"></a>

```csharp
public GoogleObservabilityBucketCmekSettingsOutputReference CmekSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference">GoogleObservabilityBucketCmekSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.purgeTime"></a>

```csharp
public string PurgeTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeouts"></a>

```csharp
public GoogleObservabilityBucketTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference">GoogleObservabilityBucketTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketIdInput"></a>

```csharp
public string BucketIdInput { get; }
```

- *Type:* string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettingsInput"></a>

```csharp
public GoogleObservabilityBucketCmekSettings CmekSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleObservabilityBucketTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a>

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketId"></a>

```csharp
public string BucketId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleObservabilityBucketCmekSettings <a name="GoogleObservabilityBucketCmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleObservabilityBucketCmekSettings {
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings.property.kmsKey">KmsKey</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The resource name for the configured Cloud KMS key. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#kms_key GoogleObservabilityBucket#kms_key}

---

### GoogleObservabilityBucketConfig <a name="GoogleObservabilityBucketConfig" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleObservabilityBucketConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BucketId,
    string Location,
    GoogleObservabilityBucketCmekSettings CmekSettings = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleObservabilityBucketTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.bucketId">BucketId</a></code> | <code>string</code> | A client-assigned identifier for the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.location">Location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.description">Description</a></code> | <code>string</code> | Description of the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#id GoogleObservabilityBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#project GoogleObservabilityBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.bucketId"></a>

```csharp
public string BucketId { get; set; }
```

- *Type:* string

A client-assigned identifier for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#bucket_id GoogleObservabilityBucket#bucket_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#location GoogleObservabilityBucket#location}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.cmekSettings"></a>

```csharp
public GoogleObservabilityBucketCmekSettings CmekSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#cmek_settings GoogleObservabilityBucket#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#description GoogleObservabilityBucket#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#display_name GoogleObservabilityBucket#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#id GoogleObservabilityBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#project GoogleObservabilityBucket#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.timeouts"></a>

```csharp
public GoogleObservabilityBucketTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#timeouts GoogleObservabilityBucket#timeouts}

---

### GoogleObservabilityBucketTimeouts <a name="GoogleObservabilityBucketTimeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleObservabilityBucketTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#create GoogleObservabilityBucket#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#delete GoogleObservabilityBucket#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#update GoogleObservabilityBucket#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#create GoogleObservabilityBucket#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#delete GoogleObservabilityBucket#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#update GoogleObservabilityBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleObservabilityBucketCmekSettingsOutputReference <a name="GoogleObservabilityBucketCmekSettingsOutputReference" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleObservabilityBucketCmekSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleObservabilityBucketCmekSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

---


### GoogleObservabilityBucketTimeoutsOutputReference <a name="GoogleObservabilityBucketTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleObservabilityBucketTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleObservabilityBucketTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a>

---



