# `googleDataplexDataProductDataAsset` Submodule <a name="`googleDataplexDataProductDataAsset` Submodule" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDataProductDataAsset <a name="GoogleDataplexDataProductDataAsset" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset google_dataplex_data_product_data_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexDataProductDataAsset(Construct Scope, string Id, GoogleDataplexDataProductDataAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig">GoogleDataplexDataProductDataAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig">GoogleDataplexDataProductDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs">PutAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs">ResetAccessGroupConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessGroupConfigs` <a name="PutAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs"></a>

```csharp
private void PutAccessGroupConfigs(IResolvable|GoogleDataplexDataProductDataAssetAccessGroupConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataplexDataProductDataAssetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---

##### `ResetAccessGroupConfigs` <a name="ResetAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs"></a>

```csharp
private void ResetAccessGroupConfigs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexDataProductDataAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexDataProductDataAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexDataProductDataAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexDataProductDataAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexDataProductDataAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexDataProductDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDataProductDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs">AccessGroupConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput">AccessGroupConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput">DataAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput">DataProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId">DataAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId">DataProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource">Resource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessGroupConfigs`<sup>Required</sup> <a name="AccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs"></a>

```csharp
public GoogleDataplexDataProductDataAssetAccessGroupConfigsList AccessGroupConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts"></a>

```csharp
public GoogleDataplexDataProductDataAssetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AccessGroupConfigsInput`<sup>Optional</sup> <a name="AccessGroupConfigsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput"></a>

```csharp
public IResolvable|GoogleDataplexDataProductDataAssetAccessGroupConfigs[] AccessGroupConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

---

##### `DataAssetIdInput`<sup>Optional</sup> <a name="DataAssetIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput"></a>

```csharp
public string DataAssetIdInput { get; }
```

- *Type:* string

---

##### `DataProductIdInput`<sup>Optional</sup> <a name="DataProductIdInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput"></a>

```csharp
public string DataProductIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDataplexDataProductDataAssetTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---

##### `DataAssetId`<sup>Required</sup> <a name="DataAssetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId"></a>

```csharp
public string DataAssetId { get; }
```

- *Type:* string

---

##### `DataProductId`<sup>Required</sup> <a name="DataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId"></a>

```csharp
public string DataProductId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigs <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexDataProductDataAssetAccessGroupConfigs {
    string AccessGroup,
    string[] IamRoles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup">AccessGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | IAM roles granted on the resource. |

---

##### `AccessGroup`<sup>Required</sup> <a name="AccessGroup" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup"></a>

```csharp
public string AccessGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; set; }
```

- *Type:* string[]

IAM roles granted on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#iam_roles GoogleDataplexDataProductDataAsset#iam_roles}

---

### GoogleDataplexDataProductDataAssetConfig <a name="GoogleDataplexDataProductDataAssetConfig" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexDataProductDataAssetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAssetId,
    string DataProductId,
    string Location,
    string Resource,
    IResolvable|GoogleDataplexDataProductDataAssetAccessGroupConfigs[] AccessGroupConfigs = null,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleDataplexDataProductDataAssetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId">DataAssetId</a></code> | <code>string</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId">DataProductId</a></code> | <code>string</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location">Location</a></code> | <code>string</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource">Resource</a></code> | <code>string</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs">AccessGroupConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAssetId`<sup>Required</sup> <a name="DataAssetId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId"></a>

```csharp
public string DataAssetId { get; set; }
```

- *Type:* string

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#data_asset_id GoogleDataplexDataProductDataAsset#data_asset_id}

---

##### `DataProductId`<sup>Required</sup> <a name="DataProductId" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId"></a>

```csharp
public string DataProductId { get; set; }
```

- *Type:* string

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#data_product_id GoogleDataplexDataProductDataAsset#data_product_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#location GoogleDataplexDataProductDataAsset#location}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#resource GoogleDataplexDataProductDataAsset#resource}

---

##### `AccessGroupConfigs`<sup>Optional</sup> <a name="AccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs"></a>

```csharp
public IResolvable|GoogleDataplexDataProductDataAssetAccessGroupConfigs[] AccessGroupConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#access_group_configs GoogleDataplexDataProductDataAsset#access_group_configs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#deletion_policy GoogleDataplexDataProductDataAsset#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#labels GoogleDataplexDataProductDataAsset#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts"></a>

```csharp
public GoogleDataplexDataProductDataAssetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#timeouts GoogleDataplexDataProductDataAsset#timeouts}

---

### GoogleDataplexDataProductDataAssetTimeouts <a name="GoogleDataplexDataProductDataAssetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexDataProductDataAssetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigsList <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsList" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexDataProductDataAssetAccessGroupConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get"></a>

```csharp
private GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexDataProductDataAssetAccessGroupConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>[]

---


### GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles">ResetIamRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput">AccessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput">IamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup">AccessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessGroupInput`<sup>Optional</sup> <a name="AccessGroupInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput"></a>

```csharp
public string AccessGroupInput { get; }
```

- *Type:* string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput"></a>

```csharp
public string[] IamRolesInput { get; }
```

- *Type:* string[]

---

##### `AccessGroup`<sup>Required</sup> <a name="AccessGroup" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup"></a>

```csharp
public string AccessGroup { get; }
```

- *Type:* string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexDataProductDataAssetAccessGroupConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>

---


### GoogleDataplexDataProductDataAssetTimeoutsOutputReference <a name="GoogleDataplexDataProductDataAssetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexDataProductDataAssetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexDataProductDataAssetTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---



