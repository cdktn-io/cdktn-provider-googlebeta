# `googleOracleDatabaseExascaleDbStorageVault` Submodule <a name="`googleOracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseExascaleDbStorageVault <a name="GoogleOracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVault(Construct Scope, string Id, GoogleOracleDatabaseExascaleDbStorageVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig">GoogleOracleDatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig">GoogleOracleDatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties"></a>

```csharp
private void PutProperties(GoogleOracleDatabaseExascaleDbStorageVaultProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleOracleDatabaseExascaleDbStorageVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseExascaleDbStorageVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseExascaleDbStorageVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseExascaleDbStorageVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseExascaleDbStorageVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseExascaleDbStorageVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">ExascaleDbStorageVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```csharp
public string ExascaleDbStorageVaultIdInput { get; }
```

- *Type:* string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleOracleDatabaseExascaleDbStorageVaultTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```csharp
public string ExascaleDbStorageVaultId { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultConfig <a name="GoogleOracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string ExascaleDbStorageVaultId,
    string Location,
    GoogleOracleDatabaseExascaleDbStorageVaultProperties Properties,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string GcpOracleZone = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleOracleDatabaseExascaleDbStorageVaultTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>string</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#display_name GoogleOracleDatabaseExascaleDbStorageVault#display_name}

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```csharp
public string ExascaleDbStorageVaultId { get; set; }
```

- *Type:* string

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#location GoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#properties GoogleOracleDatabaseExascaleDbStorageVault#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_policy GoogleOracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_protection GoogleOracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#gcp_oracle_zone GoogleOracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#labels GoogleOracleDatabaseExascaleDbStorageVault#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#timeouts GoogleOracleDatabaseExascaleDbStorageVault#timeouts}

---

### GoogleOracleDatabaseExascaleDbStorageVaultProperties <a name="GoogleOracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultProperties {
    GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails ExascaleDbStorageDetails,
    double AdditionalFlashCachePercent = null,
    GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | exascale_db_storage_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>double</code> | The size of additional flash cache in percentage of high capacity database storage. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | time_zone block. |

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails ExascaleDbStorageDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

exascale_db_storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_details GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}

---

##### `AdditionalFlashCachePercent`<sup>Optional</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent"></a>

```csharp
public double AdditionalFlashCachePercent { get; set; }
```

- *Type:* double

The size of additional flash cache in percentage of high capacity database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#additional_flash_cache_percent GoogleOracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone TimeZone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#time_zone GoogleOracleDatabaseExascaleDbStorageVault#time_zone}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails {
    double TotalSizeGbs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>double</code> | The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). |

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs"></a>

```csharp
public double TotalSizeGbs { get; set; }
```

- *Type:* double

The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#total_size_gbs GoogleOracleDatabaseExascaleDbStorageVault#total_size_gbs}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone {
    string Id = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id">Id</a></code> | <code>string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version">Version</a></code> | <code>string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#version GoogleOracleDatabaseExascaleDbStorageVault#version}

---

### GoogleOracleDatabaseExascaleDbStorageVaultTimeouts <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">AvailableSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput">TotalSizeGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSizeGbs`<sup>Required</sup> <a name="AvailableSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```csharp
public double AvailableSizeGbs { get; }
```

- *Type:* double

---

##### `TotalSizeGbsInput`<sup>Optional</sup> <a name="TotalSizeGbsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput"></a>

```csharp
public double TotalSizeGbsInput { get; }
```

- *Type:* double

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```csharp
public double TotalSizeGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails">PutExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent">ResetAdditionalFlashCachePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExascaleDbStorageDetails` <a name="PutExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails"></a>

```csharp
private void PutExascaleDbStorageDetails(GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone"></a>

```csharp
private void PutTimeZone(GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `ResetAdditionalFlashCachePercent` <a name="ResetAdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent"></a>

```csharp
private void ResetAdditionalFlashCachePercent()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">AttachedShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">AvailableShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">VmClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">VmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput">AdditionalFlashCachePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput">ExascaleDbStorageDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachedShapeAttributes`<sup>Required</sup> <a name="AttachedShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```csharp
public string[] AttachedShapeAttributes { get; }
```

- *Type:* string[]

---

##### `AvailableShapeAttributes`<sup>Required</sup> <a name="AvailableShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```csharp
public string[] AvailableShapeAttributes { get; }
```

- *Type:* string[]

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference ExascaleDbStorageDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```csharp
public string OciUri { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference TimeZone { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a>

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```csharp
public double VmClusterCount { get; }
```

- *Type:* double

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```csharp
public string[] VmClusterIds { get; }
```

- *Type:* string[]

---

##### `AdditionalFlashCachePercentInput`<sup>Optional</sup> <a name="AdditionalFlashCachePercentInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput"></a>

```csharp
public double AdditionalFlashCachePercentInput { get; }
```

- *Type:* double

---

##### `ExascaleDbStorageDetailsInput`<sup>Optional</sup> <a name="ExascaleDbStorageDetailsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails ExascaleDbStorageDetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone TimeZoneInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `AdditionalFlashCachePercent`<sup>Required</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```csharp
public double AdditionalFlashCachePercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleOracleDatabaseExascaleDbStorageVaultTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---



