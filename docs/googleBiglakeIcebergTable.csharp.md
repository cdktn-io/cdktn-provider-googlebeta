# `googleBiglakeIcebergTable` Submodule <a name="`googleBiglakeIcebergTable` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergTable <a name="GoogleBiglakeIcebergTable" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table google_biglake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTable(Construct Scope, string Id, GoogleBiglakeIcebergTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig">GoogleBiglakeIcebergTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig">GoogleBiglakeIcebergTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec">PutPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec">ResetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionSpec` <a name="PutPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec"></a>

```csharp
private void PutPartitionSpec(GoogleBiglakeIcebergTablePartitionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema"></a>

```csharp
private void PutSchema(GoogleBiglakeIcebergTableSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBiglakeIcebergTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetPartitionSpec` <a name="ResetPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec"></a>

```csharp
private void ResetPartitionSpec()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBiglakeIcebergTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBiglakeIcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput">PartitionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PartitionSpec`<sup>Required</sup> <a name="PartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec"></a>

```csharp
public GoogleBiglakeIcebergTablePartitionSpecOutputReference PartitionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema"></a>

```csharp
public GoogleBiglakeIcebergTableSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts"></a>

```csharp
public GoogleBiglakeIcebergTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionSpecInput`<sup>Optional</sup> <a name="PartitionSpecInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput"></a>

```csharp
public GoogleBiglakeIcebergTablePartitionSpec PartitionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput"></a>

```csharp
public GoogleBiglakeIcebergTableSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTableTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergTableConfig <a name="GoogleBiglakeIcebergTableConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Catalog,
    string Name,
    string Namespace,
    GoogleBiglakeIcebergTableSchema Schema,
    string DeletionPolicy = null,
    string Id = null,
    string Location = null,
    GoogleBiglakeIcebergTablePartitionSpec PartitionSpec = null,
    string Project = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    GoogleBiglakeIcebergTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog">Catalog</a></code> | <code>string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name">Name</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace">Namespace</a></code> | <code>string</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location">Location</a></code> | <code>string</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#catalog GoogleBiglakeIcebergTable#catalog}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#namespace GoogleBiglakeIcebergTable#namespace}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema"></a>

```csharp
public GoogleBiglakeIcebergTableSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#schema GoogleBiglakeIcebergTable#schema}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#deletion_policy GoogleBiglakeIcebergTable#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#location GoogleBiglakeIcebergTable#location}

---

##### `PartitionSpec`<sup>Optional</sup> <a name="PartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec"></a>

```csharp
public GoogleBiglakeIcebergTablePartitionSpec PartitionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#partition_spec GoogleBiglakeIcebergTable#partition_spec}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#properties GoogleBiglakeIcebergTable#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts"></a>

```csharp
public GoogleBiglakeIcebergTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#timeouts GoogleBiglakeIcebergTable#timeouts}

---

### GoogleBiglakeIcebergTablePartitionSpec <a name="GoogleBiglakeIcebergTablePartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTablePartitionSpec {
    IResolvable|GoogleBiglakeIcebergTablePartitionSpecFields[] Fields
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]</code> | fields block. |

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTablePartitionSpecFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

### GoogleBiglakeIcebergTablePartitionSpecFields <a name="GoogleBiglakeIcebergTablePartitionSpecFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTablePartitionSpecFields {
    string Name,
    double SourceId,
    string Transform
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name">Name</a></code> | <code>string</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId">SourceId</a></code> | <code>double</code> | The source field ID for the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform">Transform</a></code> | <code>string</code> | The transform to apply to the source field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId"></a>

```csharp
public double SourceId { get; set; }
```

- *Type:* double

The source field ID for the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#source_id GoogleBiglakeIcebergTable#source_id}

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform"></a>

```csharp
public string Transform { get; set; }
```

- *Type:* string

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#transform GoogleBiglakeIcebergTable#transform}

---

### GoogleBiglakeIcebergTableSchema <a name="GoogleBiglakeIcebergTableSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableSchema {
    IResolvable|GoogleBiglakeIcebergTableSchemaFields[] Fields,
    double[] IdentifierFieldIds = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>double[]</code> | The field IDs that make up the identifier for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type">Type</a></code> | <code>string</code> | The type of the schema. |

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTableSchemaFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

##### `IdentifierFieldIds`<sup>Optional</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds"></a>

```csharp
public double[] IdentifierFieldIds { get; set; }
```

- *Type:* double[]

The field IDs that make up the identifier for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#identifier_field_ids GoogleBiglakeIcebergTable#identifier_field_ids}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

### GoogleBiglakeIcebergTableSchemaFields <a name="GoogleBiglakeIcebergTableSchemaFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableSchemaFields {
    double Id,
    string Name,
    bool|IResolvable Required,
    string Type,
    string Doc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id">Id</a></code> | <code>double</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name">Name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type">Type</a></code> | <code>string</code> | The type of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc">Doc</a></code> | <code>string</code> | A description of the field. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

The unique identifier of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#required GoogleBiglakeIcebergTable#required}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

##### `Doc`<sup>Optional</sup> <a name="Doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc"></a>

```csharp
public string Doc { get; set; }
```

- *Type:* string

A description of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#doc GoogleBiglakeIcebergTable#doc}

---

### GoogleBiglakeIcebergTableTimeouts <a name="GoogleBiglakeIcebergTableTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergTablePartitionSpecFieldsList <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTablePartitionSpecFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get"></a>

```csharp
private GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTablePartitionSpecFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

---


### GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput">TransformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform">Transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId"></a>

```csharp
public double FieldId { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```csharp
public double SourceIdInput { get; }
```

- *Type:* double

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput"></a>

```csharp
public string TransformInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId"></a>

```csharp
public double SourceId { get; }
```

- *Type:* double

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform"></a>

```csharp
public string Transform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTablePartitionSpecFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>

---


### GoogleBiglakeIcebergTablePartitionSpecOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTablePartitionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields">PutFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|GoogleBiglakeIcebergTablePartitionSpecFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId">SpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields"></a>

```csharp
public GoogleBiglakeIcebergTablePartitionSpecFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId"></a>

```csharp
public double SpecId { get; }
```

- *Type:* double

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTablePartitionSpecFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields">GoogleBiglakeIcebergTablePartitionSpecFields</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergTablePartitionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---


### GoogleBiglakeIcebergTableSchemaFieldsList <a name="GoogleBiglakeIcebergTableSchemaFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableSchemaFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get"></a>

```csharp
private GoogleBiglakeIcebergTableSchemaFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTableSchemaFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

---


### GoogleBiglakeIcebergTableSchemaFieldsOutputReference <a name="GoogleBiglakeIcebergTableSchemaFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableSchemaFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc">ResetDoc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDoc` <a name="ResetDoc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc"></a>

```csharp
private void ResetDoc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput">DocInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc">Doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocInput`<sup>Optional</sup> <a name="DocInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput"></a>

```csharp
public string DocInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Doc`<sup>Required</sup> <a name="Doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc"></a>

```csharp
public string Doc { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTableSchemaFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>

---


### GoogleBiglakeIcebergTableSchemaOutputReference <a name="GoogleBiglakeIcebergTableSchemaOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds">ResetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|GoogleBiglakeIcebergTableSchemaFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

---

##### `ResetIdentifierFieldIds` <a name="ResetIdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds"></a>

```csharp
private void ResetIdentifierFieldIds()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId">SchemaId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput">IdentifierFieldIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields"></a>

```csharp
public GoogleBiglakeIcebergTableSchemaFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a>

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId"></a>

```csharp
public double SchemaId { get; }
```

- *Type:* double

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTableSchemaFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields">GoogleBiglakeIcebergTableSchemaFields</a>[]

---

##### `IdentifierFieldIdsInput`<sup>Optional</sup> <a name="IdentifierFieldIdsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput"></a>

```csharp
public double[] IdentifierFieldIdsInput { get; }
```

- *Type:* double[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentifierFieldIds`<sup>Required</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds"></a>

```csharp
public double[] IdentifierFieldIds { get; }
```

- *Type:* double[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergTableSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---


### GoogleBiglakeIcebergTableTimeoutsOutputReference <a name="GoogleBiglakeIcebergTableTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergTableTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---



