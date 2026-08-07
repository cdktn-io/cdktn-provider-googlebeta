# `googleVectorSearchDataObject` Submodule <a name="`googleVectorSearchDataObject` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchDataObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchDataObject <a name="GoogleVectorSearchDataObject" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object google_vector_search_data_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObject(Construct Scope, string Id, GoogleVectorSearchDataObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig">GoogleVectorSearchDataObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig">GoogleVectorSearchDataObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors">PutVectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors">ResetVectors</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVectorSearchDataObjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---

##### `PutVectors` <a name="PutVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors"></a>

```csharp
private void PutVectors(IResolvable|GoogleVectorSearchDataObjectVectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>[]

---

##### `ResetData` <a name="ResetData" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVectors` <a name="ResetVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors"></a>

```csharp
private void ResetVectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchDataObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchDataObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchDataObject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchDataObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVectorSearchDataObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVectorSearchDataObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchDataObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors">Vectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput">DataObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput">VectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId">DataObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts"></a>

```csharp
public GoogleVectorSearchDataObjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Vectors`<sup>Required</sup> <a name="Vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsList Vectors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `DataObjectIdInput`<sup>Optional</sup> <a name="DataObjectIdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput"></a>

```csharp
public string DataObjectIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVectorSearchDataObjectTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---

##### `VectorsInput`<sup>Optional</sup> <a name="VectorsInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput"></a>

```csharp
public IResolvable|GoogleVectorSearchDataObjectVectors[] VectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `DataObjectId`<sup>Required</sup> <a name="DataObjectId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId"></a>

```csharp
public string DataObjectId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchDataObjectConfig <a name="GoogleVectorSearchDataObjectConfig" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CollectionId,
    string DataObjectId,
    string Location,
    string Data = null,
    string DeletionPolicy = null,
    string Etag = null,
    string Id = null,
    string Project = null,
    GoogleVectorSearchDataObjectTimeouts Timeouts = null,
    IResolvable|GoogleVectorSearchDataObjectVectors[] Vectors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId">DataObjectId</a></code> | <code>string</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data">Data</a></code> | <code>string</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag">Etag</a></code> | <code>string</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors">Vectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>[]</code> | vectors block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#collection_id GoogleVectorSearchDataObject#collection_id}

---

##### `DataObjectId`<sup>Required</sup> <a name="DataObjectId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId"></a>

```csharp
public string DataObjectId { get; set; }
```

- *Type:* string

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data_object_id GoogleVectorSearchDataObject#data_object_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#location GoogleVectorSearchDataObject#location}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data GoogleVectorSearchDataObject#data}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#deletion_policy GoogleVectorSearchDataObject#deletion_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#etag GoogleVectorSearchDataObject#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts"></a>

```csharp
public GoogleVectorSearchDataObjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#timeouts GoogleVectorSearchDataObject#timeouts}

---

##### `Vectors`<sup>Optional</sup> <a name="Vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors"></a>

```csharp
public IResolvable|GoogleVectorSearchDataObjectVectors[] Vectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>[]

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#vectors GoogleVectorSearchDataObject#vectors}

---

### GoogleVectorSearchDataObjectTimeouts <a name="GoogleVectorSearchDataObjectTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}.

---

### GoogleVectorSearchDataObjectVectors <a name="GoogleVectorSearchDataObjectVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectVectors {
    string FieldName,
    GoogleVectorSearchDataObjectVectorsDense Dense = null,
    GoogleVectorSearchDataObjectVectorsSparse Sparse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName">FieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense">Dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | dense block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse">Sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | sparse block. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}.

---

##### `Dense`<sup>Optional</sup> <a name="Dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsDense Dense { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

dense block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#dense GoogleVectorSearchDataObject#dense}

---

##### `Sparse`<sup>Optional</sup> <a name="Sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsSparse Sparse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

sparse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#sparse GoogleVectorSearchDataObject#sparse}

---

### GoogleVectorSearchDataObjectVectorsDense <a name="GoogleVectorSearchDataObjectVectorsDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectVectorsDense {
    double[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values">Values</a></code> | <code>double[]</code> | The float values of the dense vector. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

### GoogleVectorSearchDataObjectVectorsSparse <a name="GoogleVectorSearchDataObjectVectorsSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectVectorsSparse {
    double[] Indices,
    double[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices">Indices</a></code> | <code>double[]</code> | The indices corresponding to the entries in 'values'. Must have the same length as 'values'. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values">Values</a></code> | <code>double[]</code> | The non-zero float values of the sparse vector. |

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices"></a>

```csharp
public double[] Indices { get; set; }
```

- *Type:* double[]

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#indices GoogleVectorSearchDataObject#indices}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchDataObjectTimeoutsOutputReference <a name="GoogleVectorSearchDataObjectTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVectorSearchDataObjectTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---


### GoogleVectorSearchDataObjectVectorsDenseOutputReference <a name="GoogleVectorSearchDataObjectVectorsDenseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectVectorsDenseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsDense InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---


### GoogleVectorSearchDataObjectVectorsList <a name="GoogleVectorSearchDataObjectVectorsList" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectVectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get"></a>

```csharp
private GoogleVectorSearchDataObjectVectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVectorSearchDataObjectVectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>[]

---


### GoogleVectorSearchDataObjectVectorsOutputReference <a name="GoogleVectorSearchDataObjectVectorsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectVectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense">PutDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse">PutSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense">ResetDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse">ResetSparse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDense` <a name="PutDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense"></a>

```csharp
private void PutDense(GoogleVectorSearchDataObjectVectorsDense Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---

##### `PutSparse` <a name="PutSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse"></a>

```csharp
private void PutSparse(GoogleVectorSearchDataObjectVectorsSparse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---

##### `ResetDense` <a name="ResetDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense"></a>

```csharp
private void ResetDense()
```

##### `ResetSparse` <a name="ResetSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse"></a>

```csharp
private void ResetSparse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense">Dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse">Sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput">DenseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput">SparseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dense`<sup>Required</sup> <a name="Dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsDenseOutputReference Dense { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a>

---

##### `Sparse`<sup>Required</sup> <a name="Sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsSparseOutputReference Sparse { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a>

---

##### `DenseInput`<sup>Optional</sup> <a name="DenseInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsDense DenseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `SparseInput`<sup>Optional</sup> <a name="SparseInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsSparse SparseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVectorSearchDataObjectVectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>

---


### GoogleVectorSearchDataObjectVectorsSparseOutputReference <a name="GoogleVectorSearchDataObjectVectorsSparseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchDataObjectVectorsSparseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput">IndicesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices">Indices</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndicesInput`<sup>Optional</sup> <a name="IndicesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput"></a>

```csharp
public double[] IndicesInput { get; }
```

- *Type:* double[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices"></a>

```csharp
public double[] Indices { get; }
```

- *Type:* double[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue"></a>

```csharp
public GoogleVectorSearchDataObjectVectorsSparse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---



