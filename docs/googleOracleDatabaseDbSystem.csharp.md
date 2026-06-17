# `googleOracleDatabaseDbSystem` Submodule <a name="`googleOracleDatabaseDbSystem` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseDbSystem <a name="GoogleOracleDatabaseDbSystem" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system google_oracle_database_db_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystem(Construct Scope, string Id, GoogleOracleDatabaseDbSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig">GoogleOracleDatabaseDbSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig">GoogleOracleDatabaseDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties"></a>

```csharp
private void PutProperties(GoogleOracleDatabaseDbSystemProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleOracleDatabaseDbSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOdbNetwork"></a>

```csharp
private void ResetOdbNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseDbSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseDbSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseDbSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseDbSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleOracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseDbSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference">GoogleOracleDatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.properties"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseDbSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference">GoogleOracleDatabaseDbSystemTimeoutsOutputReference</a>

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetworkInput"></a>

```csharp
public string OdbNetworkInput { get; }
```

- *Type:* string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnetInput"></a>

```csharp
public string OdbSubnetInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.propertiesInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleOracleDatabaseDbSystemTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; }
```

- *Type:* string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseDbSystemConfig <a name="GoogleOracleDatabaseDbSystemConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DbSystemId,
    string DisplayName,
    string Location,
    string OdbSubnet,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string GcpOracleZone = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string OdbNetwork = null,
    string Project = null,
    GoogleOracleDatabaseDbSystemProperties Properties = null,
    GoogleOracleDatabaseDbSystemTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | The ID of the DbSystem to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the System db. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where Oracle DbSystem is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels or tags associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | The name of the OdbNetwork associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

The ID of the DbSystem to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_system_id GoogleOracleDatabaseDbSystem#db_system_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the System db. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#location GoogleOracleDatabaseDbSystem#location}

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; set; }
```

- *Type:* string

The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#odb_subnet GoogleOracleDatabaseDbSystem#odb_subnet}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#deletion_policy GoogleOracleDatabaseDbSystem#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#deletion_protection GoogleOracleDatabaseDbSystem#deletion_protection}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

The GCP Oracle zone where Oracle DbSystem is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels or tags associated with the DbSystem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#labels GoogleOracleDatabaseDbSystem#labels}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; set; }
```

- *Type:* string

The name of the OdbNetwork associated with the DbSystem.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#odb_network GoogleOracleDatabaseDbSystem#odb_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.properties"></a>

```csharp
public GoogleOracleDatabaseDbSystemProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseDbSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#timeouts GoogleOracleDatabaseDbSystem#timeouts}

---

### GoogleOracleDatabaseDbSystemProperties <a name="GoogleOracleDatabaseDbSystemProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemProperties {
    double ComputeCount,
    string DatabaseEdition,
    double InitialDataStorageSizeGb,
    string LicenseModel,
    string Shape,
    string[] SshPublicKeys,
    string ComputeModel = null,
    GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions DataCollectionOptions = null,
    double DataStorageSizeGb = null,
    GoogleOracleDatabaseDbSystemPropertiesDbHome DbHome = null,
    GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions DbSystemOptions = null,
    string Domain = null,
    string HostnamePrefix = null,
    double MemorySizeGb = null,
    double NodeCount = null,
    string PrivateIp = null,
    double RecoStorageSizeGb = null,
    GoogleOracleDatabaseDbSystemPropertiesTimeZone TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeCount">ComputeCount</a></code> | <code>double</code> | The number of CPU cores to enable for the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb">InitialDataStorageSizeGb</a></code> | <code>double</code> | The initial data storage size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.licenseModel">LicenseModel</a></code> | <code>string</code> | The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.shape">Shape</a></code> | <code>string</code> | Shape of DB System. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | SSH public keys to be stored with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeModel">ComputeModel</a></code> | <code>string</code> | The compute model of the DbSystem. Possible values: ECPU OCPU. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>double</code> | The data storage size in GB that is currently available to DbSystems. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbHome">DbHome</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | db_home block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.domain">Domain</a></code> | <code>string</code> | The host domain name of the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | Prefix for DB System host names. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | The memory size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes in the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.privateIp">PrivateIp</a></code> | <code>string</code> | The private IP address of the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.recoStorageSizeGb">RecoStorageSizeGb</a></code> | <code>double</code> | The reco/redo storage size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | time_zone block. |

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

The number of CPU cores to enable for the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#compute_count GoogleOracleDatabaseDbSystem#compute_count}

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; set; }
```

- *Type:* string

The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database_edition GoogleOracleDatabaseDbSystem#database_edition}

---

##### `InitialDataStorageSizeGb`<sup>Required</sup> <a name="InitialDataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb"></a>

```csharp
public double InitialDataStorageSizeGb { get; set; }
```

- *Type:* double

The initial data storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#initial_data_storage_size_gb GoogleOracleDatabaseDbSystem#initial_data_storage_size_gb}

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#license_model GoogleOracleDatabaseDbSystem#license_model}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Shape of DB System.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#shape GoogleOracleDatabaseDbSystem#shape}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

SSH public keys to be stored with the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#ssh_public_keys GoogleOracleDatabaseDbSystem#ssh_public_keys}

---

##### `ComputeModel`<sup>Optional</sup> <a name="ComputeModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeModel"></a>

```csharp
public string ComputeModel { get; set; }
```

- *Type:* string

The compute model of the DbSystem. Possible values: ECPU OCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#compute_model GoogleOracleDatabaseDbSystem#compute_model}

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataCollectionOptions"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions DataCollectionOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#data_collection_options GoogleOracleDatabaseDbSystem#data_collection_options}

---

##### `DataStorageSizeGb`<sup>Optional</sup> <a name="DataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataStorageSizeGb"></a>

```csharp
public double DataStorageSizeGb { get; set; }
```

- *Type:* double

The data storage size in GB that is currently available to DbSystems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#data_storage_size_gb GoogleOracleDatabaseDbSystem#data_storage_size_gb}

---

##### `DbHome`<sup>Optional</sup> <a name="DbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbHome"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHome DbHome { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_home GoogleOracleDatabaseDbSystem#db_home}

---

##### `DbSystemOptions`<sup>Optional</sup> <a name="DbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbSystemOptions"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions DbSystemOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_system_options GoogleOracleDatabaseDbSystem#db_system_options}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The host domain name of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#domain GoogleOracleDatabaseDbSystem#domain}

---

##### `HostnamePrefix`<sup>Optional</sup> <a name="HostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; set; }
```

- *Type:* string

Prefix for DB System host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#hostname_prefix GoogleOracleDatabaseDbSystem#hostname_prefix}

---

##### `MemorySizeGb`<sup>Optional</sup> <a name="MemorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; set; }
```

- *Type:* double

The memory size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#memory_size_gb GoogleOracleDatabaseDbSystem#memory_size_gb}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes in the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#node_count GoogleOracleDatabaseDbSystem#node_count}

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

The private IP address of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#private_ip GoogleOracleDatabaseDbSystem#private_ip}

---

##### `RecoStorageSizeGb`<sup>Optional</sup> <a name="RecoStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.recoStorageSizeGb"></a>

```csharp
public double RecoStorageSizeGb { get; set; }
```

- *Type:* double

The reco/redo storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#reco_storage_size_gb GoogleOracleDatabaseDbSystem#reco_storage_size_gb}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.timeZone"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesTimeZone TimeZone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#time_zone GoogleOracleDatabaseDbSystem#time_zone}

---

### GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions <a name="GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions {
    bool|IResolvable IsDiagnosticsEventsEnabled = null,
    bool|IResolvable IsIncidentLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#is_diagnostics_events_enabled GoogleOracleDatabaseDbSystem#is_diagnostics_events_enabled}

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#is_incident_logs_enabled GoogleOracleDatabaseDbSystem#is_incident_logs_enabled}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHome <a name="GoogleOracleDatabaseDbSystemPropertiesDbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHome {
    GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase Database,
    string DbVersion,
    string DisplayName = null,
    bool|IResolvable IsUnifiedAuditingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.database">Database</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | database block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.dbVersion">DbVersion</a></code> | <code>string</code> | A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the Database Home. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled">IsUnifiedAuditingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether unified auditing is enabled for the Database Home. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.database"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database GoogleOracleDatabaseDbSystem#database}

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the Database Home. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

##### `IsUnifiedAuditingEnabled`<sup>Optional</sup> <a name="IsUnifiedAuditingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled"></a>

```csharp
public bool|IResolvable IsUnifiedAuditingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether unified auditing is enabled for the Database Home.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#is_unified_auditing_enabled GoogleOracleDatabaseDbSystem#is_unified_auditing_enabled}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase {
    string AdminPassword,
    string DatabaseId,
    string CharacterSet = null,
    string DbHomeName = null,
    string DbName = null,
    string DbUniqueName = null,
    string GcpOracleZone = null,
    string NcharacterSet = null,
    string PluggableDatabaseId = null,
    string PluggableDatabaseName = null,
    GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties Properties = null,
    string TdeWalletPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId">DatabaseId</a></code> | <code>string</code> | The database ID of the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | The character set for the database. The default is AL32UTF8. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName">DbHomeName</a></code> | <code>string</code> | The name of the DbHome resource associated with the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName">DbName</a></code> | <code>string</code> | The database name. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | The DB_UNIQUE_NAME of the Oracle Database being backed up. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where the Database is created. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | The national character set for the database. The default is AL16UTF16. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>string</code> | The ID of the pluggable database associated with Database. The ID must be unique within the project and location. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName">PluggableDatabaseName</a></code> | <code>string</code> | The pluggable dataabse associated with the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | The TDE wallet password for the database. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#admin_password GoogleOracleDatabaseDbSystem#admin_password}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

The database ID of the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database_id GoogleOracleDatabaseDbSystem#database_id}

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

The character set for the database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#character_set GoogleOracleDatabaseDbSystem#character_set}

---

##### `DbHomeName`<sup>Optional</sup> <a name="DbHomeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName"></a>

```csharp
public string DbHomeName { get; set; }
```

- *Type:* string

The name of the DbHome resource associated with the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_home_name GoogleOracleDatabaseDbSystem#db_home_name}

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

The database name.

The name must begin with an alphabetic character and can
contain a maximum of eight alphanumeric characters. Special characters are
not permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_name GoogleOracleDatabaseDbSystem#db_name}

---

##### `DbUniqueName`<sup>Optional</sup> <a name="DbUniqueName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; set; }
```

- *Type:* string

The DB_UNIQUE_NAME of the Oracle Database being backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_unique_name GoogleOracleDatabaseDbSystem#db_unique_name}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

The GCP Oracle zone where the Database is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; set; }
```

- *Type:* string

The national character set for the database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#ncharacter_set GoogleOracleDatabaseDbSystem#ncharacter_set}

---

##### `PluggableDatabaseId`<sup>Optional</sup> <a name="PluggableDatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId"></a>

```csharp
public string PluggableDatabaseId { get; set; }
```

- *Type:* string

The ID of the pluggable database associated with Database. The ID must be unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#pluggable_database_id GoogleOracleDatabaseDbSystem#pluggable_database_id}

---

##### `PluggableDatabaseName`<sup>Optional</sup> <a name="PluggableDatabaseName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName"></a>

```csharp
public string PluggableDatabaseName { get; set; }
```

- *Type:* string

The pluggable dataabse associated with the Database.

The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#pluggable_database_name GoogleOracleDatabaseDbSystem#pluggable_database_name}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; set; }
```

- *Type:* string

The TDE wallet password for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#tde_wallet_password GoogleOracleDatabaseDbSystem#tde_wallet_password}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties {
    string DbVersion,
    GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig DatabaseManagementConfig = null,
    GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig DbBackupConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion">DbVersion</a></code> | <code>string</code> | The Oracle Database version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | database_management_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | db_backup_config block. |

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

The Oracle Database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

##### `DatabaseManagementConfig`<sup>Optional</sup> <a name="DatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig DatabaseManagementConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

database_management_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database_management_config GoogleOracleDatabaseDbSystem#database_management_config}

---

##### `DbBackupConfig`<sup>Optional</sup> <a name="DbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig DbBackupConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_backup_config GoogleOracleDatabaseDbSystem#db_backup_config}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig {

};
```


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig {
    bool|IResolvable AutoBackupEnabled = null,
    string AutoFullBackupDay = null,
    string AutoFullBackupWindow = null,
    string AutoIncrementalBackupWindow = null,
    string BackupDeletionPolicy = null,
    IResolvable|GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] BackupDestinationDetails = null,
    double RetentionPeriodDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, enables automatic backups on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | The window in which the full backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow">AutoIncrementalBackupWindow</a></code> | <code>string</code> | The window in which the incremental backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]</code> | backup_destination_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | The number of days an automatic backup is retained before being automatically deleted. |

---

##### `AutoBackupEnabled`<sup>Optional</sup> <a name="AutoBackupEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled"></a>

```csharp
public bool|IResolvable AutoBackupEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, enables automatic backups on the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_backup_enabled GoogleOracleDatabaseDbSystem#auto_backup_enabled}

---

##### `AutoFullBackupDay`<sup>Optional</sup> <a name="AutoFullBackupDay" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; set; }
```

- *Type:* string

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_full_backup_day GoogleOracleDatabaseDbSystem#auto_full_backup_day}

---

##### `AutoFullBackupWindow`<sup>Optional</sup> <a name="AutoFullBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; set; }
```

- *Type:* string

The window in which the full backup should be performed on the database.

If no value is provided, the default is anytime.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_full_backup_window GoogleOracleDatabaseDbSystem#auto_full_backup_window}

---

##### `AutoIncrementalBackupWindow`<sup>Optional</sup> <a name="AutoIncrementalBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow"></a>

```csharp
public string AutoIncrementalBackupWindow { get; set; }
```

- *Type:* string

The window in which the incremental backup should be performed on the database.

If no value is provided, the default is anytime except the auto
full backup day.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_incremental_backup_window GoogleOracleDatabaseDbSystem#auto_incremental_backup_window}

---

##### `BackupDeletionPolicy`<sup>Optional</sup> <a name="BackupDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; set; }
```

- *Type:* string

This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#backup_deletion_policy GoogleOracleDatabaseDbSystem#backup_deletion_policy}

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails"></a>

```csharp
public IResolvable|GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] BackupDestinationDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#backup_destination_details GoogleOracleDatabaseDbSystem#backup_destination_details}

---

##### `RetentionPeriodDays`<sup>Optional</sup> <a name="RetentionPeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; set; }
```

- *Type:* double

The number of days an automatic backup is retained before being automatically deleted.

This value determines the earliest point in time to
which a database can be restored. Min: 1, Max: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#retention_period_days GoogleOracleDatabaseDbSystem#retention_period_days}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>string</code> | The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#type GoogleOracleDatabaseDbSystem#type}

---

### GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions <a name="GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions {
    string StorageManagement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement">StorageManagement</a></code> | <code>string</code> | The storage option used in DB system. Possible values: ASM LVM. |

---

##### `StorageManagement`<sup>Optional</sup> <a name="StorageManagement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement"></a>

```csharp
public string StorageManagement { get; set; }
```

- *Type:* string

The storage option used in DB system. Possible values: ASM LVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#storage_management GoogleOracleDatabaseDbSystem#storage_management}

---

### GoogleOracleDatabaseDbSystemPropertiesTimeZone <a name="GoogleOracleDatabaseDbSystemPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesTimeZone {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.property.id">Id</a></code> | <code>string</code> | IANA Time Zone Database time zone. For example "America/New_York". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GoogleOracleDatabaseDbSystemTimeouts <a name="GoogleOracleDatabaseDbSystemTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#create GoogleOracleDatabaseDbSystem#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#delete GoogleOracleDatabaseDbSystem#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#update GoogleOracleDatabaseDbSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#create GoogleOracleDatabaseDbSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#delete GoogleOracleDatabaseDbSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#update GoogleOracleDatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```csharp
private void ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```csharp
private void ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName">ResetDbHomeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName">ResetDbUniqueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet">ResetNcharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId">ResetPluggableDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName">ResetPluggableDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties"></a>

```csharp
private void PutProperties(GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```csharp
private void ResetCharacterSet()
```

##### `ResetDbHomeName` <a name="ResetDbHomeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName"></a>

```csharp
private void ResetDbHomeName()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName"></a>

```csharp
private void ResetDbName()
```

##### `ResetDbUniqueName` <a name="ResetDbUniqueName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```csharp
private void ResetDbUniqueName()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```csharp
private void ResetNcharacterSet()
```

##### `ResetPluggableDatabaseId` <a name="ResetPluggableDatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId"></a>

```csharp
private void ResetPluggableDatabaseId()
```

##### `ResetPluggableDatabaseName` <a name="ResetPluggableDatabaseName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName"></a>

```csharp
private void ResetPluggableDatabaseName()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```csharp
private void ResetTdeWalletPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus">OpsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput">DbHomeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput">DbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput">PluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput">PluggableDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName">DbHomeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName">PluggableDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OpsInsightsStatus`<sup>Required</sup> <a name="OpsInsightsStatus" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus"></a>

```csharp
public string OpsInsightsStatus { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DbHomeNameInput`<sup>Optional</sup> <a name="DbHomeNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput"></a>

```csharp
public string DbHomeNameInput { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DbUniqueNameInput`<sup>Optional</sup> <a name="DbUniqueNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```csharp
public string DbUniqueNameInput { get; }
```

- *Type:* string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```csharp
public string NcharacterSetInput { get; }
```

- *Type:* string

---

##### `PluggableDatabaseIdInput`<sup>Optional</sup> <a name="PluggableDatabaseIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput"></a>

```csharp
public string PluggableDatabaseIdInput { get; }
```

- *Type:* string

---

##### `PluggableDatabaseNameInput`<sup>Optional</sup> <a name="PluggableDatabaseNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput"></a>

```csharp
public string PluggableDatabaseNameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```csharp
public string TdeWalletPasswordInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DbHomeName`<sup>Required</sup> <a name="DbHomeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName"></a>

```csharp
public string DbHomeName { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId"></a>

```csharp
public string PluggableDatabaseId { get; }
```

- *Type:* string

---

##### `PluggableDatabaseName`<sup>Required</sup> <a name="PluggableDatabaseName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName"></a>

```csharp
public string PluggableDatabaseName { get; }
```

- *Type:* string

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState">ManagementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType">ManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagementState`<sup>Required</sup> <a name="ManagementState" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState"></a>

```csharp
public string ManagementState { get; }
```

- *Type:* string

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType"></a>

```csharp
public string ManagementType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get"></a>

```csharp
private GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled">ResetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay">ResetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow">ResetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow">ResetAutoIncrementalBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy">ResetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays">ResetRetentionPeriodDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```csharp
private void PutBackupDestinationDetails(IResolvable|GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

---

##### `ResetAutoBackupEnabled` <a name="ResetAutoBackupEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```csharp
private void ResetAutoBackupEnabled()
```

##### `ResetAutoFullBackupDay` <a name="ResetAutoFullBackupDay" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```csharp
private void ResetAutoFullBackupDay()
```

##### `ResetAutoFullBackupWindow` <a name="ResetAutoFullBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```csharp
private void ResetAutoFullBackupWindow()
```

##### `ResetAutoIncrementalBackupWindow` <a name="ResetAutoIncrementalBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow"></a>

```csharp
private void ResetAutoIncrementalBackupWindow()
```

##### `ResetBackupDeletionPolicy` <a name="ResetBackupDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```csharp
private void ResetBackupDeletionPolicy()
```

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```csharp
private void ResetBackupDestinationDetails()
```

##### `ResetRetentionPeriodDays` <a name="ResetRetentionPeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays"></a>

```csharp
private void ResetRetentionPeriodDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput">AutoBackupEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput">AutoFullBackupDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput">AutoFullBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput">AutoIncrementalBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput">BackupDeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput">RetentionPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow">AutoIncrementalBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList BackupDestinationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a>

---

##### `AutoBackupEnabledInput`<sup>Optional</sup> <a name="AutoBackupEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```csharp
public bool|IResolvable AutoBackupEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoFullBackupDayInput`<sup>Optional</sup> <a name="AutoFullBackupDayInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```csharp
public string AutoFullBackupDayInput { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindowInput`<sup>Optional</sup> <a name="AutoFullBackupWindowInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```csharp
public string AutoFullBackupWindowInput { get; }
```

- *Type:* string

---

##### `AutoIncrementalBackupWindowInput`<sup>Optional</sup> <a name="AutoIncrementalBackupWindowInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput"></a>

```csharp
public string AutoIncrementalBackupWindowInput { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicyInput`<sup>Optional</sup> <a name="BackupDeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```csharp
public string BackupDeletionPolicyInput { get; }
```

- *Type:* string

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```csharp
public IResolvable|GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[] BackupDestinationDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

---

##### `RetentionPeriodDaysInput`<sup>Optional</sup> <a name="RetentionPeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput"></a>

```csharp
public double RetentionPeriodDaysInput { get; }
```

- *Type:* double

---

##### `AutoBackupEnabled`<sup>Required</sup> <a name="AutoBackupEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```csharp
public bool|IResolvable AutoBackupEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoFullBackupDay`<sup>Required</sup> <a name="AutoFullBackupDay" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindow`<sup>Required</sup> <a name="AutoFullBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; }
```

- *Type:* string

---

##### `AutoIncrementalBackupWindow`<sup>Required</sup> <a name="AutoIncrementalBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow"></a>

```csharp
public string AutoIncrementalBackupWindow { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicy`<sup>Required</sup> <a name="BackupDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; }
```

- *Type:* string

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig">PutDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig">PutDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig">ResetDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig">ResetDbBackupConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseManagementConfig` <a name="PutDatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig"></a>

```csharp
private void PutDatabaseManagementConfig(GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `PutDbBackupConfig` <a name="PutDbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig"></a>

```csharp
private void PutDbBackupConfig(GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `ResetDatabaseManagementConfig` <a name="ResetDatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig"></a>

```csharp
private void ResetDatabaseManagementConfig()
```

##### `ResetDbBackupConfig` <a name="ResetDbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig"></a>

```csharp
private void ResetDbBackupConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput">DatabaseManagementConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput">DbBackupConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference DatabaseManagementConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a>

---

##### `DbBackupConfig`<sup>Required</sup> <a name="DbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference DbBackupConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DatabaseManagementConfigInput`<sup>Optional</sup> <a name="DatabaseManagementConfigInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig DatabaseManagementConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `DbBackupConfigInput`<sup>Optional</sup> <a name="DbBackupConfigInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig DbBackupConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled">ResetIsUnifiedAuditingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetIsUnifiedAuditingEnabled` <a name="ResetIsUnifiedAuditingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled"></a>

```csharp
private void ResetIsUnifiedAuditingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput">IsUnifiedAuditingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled">IsUnifiedAuditingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase DatabaseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IsUnifiedAuditingEnabledInput`<sup>Optional</sup> <a name="IsUnifiedAuditingEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput"></a>

```csharp
public bool|IResolvable IsUnifiedAuditingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsUnifiedAuditingEnabled`<sup>Required</sup> <a name="IsUnifiedAuditingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled"></a>

```csharp
public bool|IResolvable IsUnifiedAuditingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHome InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement">ResetStorageManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageManagement` <a name="ResetStorageManagement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement"></a>

```csharp
private void ResetStorageManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput">StorageManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement">StorageManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageManagementInput`<sup>Optional</sup> <a name="StorageManagementInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```csharp
public string StorageManagementInput { get; }
```

- *Type:* string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement"></a>

```csharp
public string StorageManagement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---


### GoogleOracleDatabaseDbSystemPropertiesOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome">PutDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions">PutDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel">ResetComputeModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb">ResetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbHome">ResetDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions">ResetDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix">ResetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb">ResetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb">ResetRecoStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions"></a>

```csharp
private void PutDataCollectionOptions(GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `PutDbHome` <a name="PutDbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome"></a>

```csharp
private void PutDbHome(GoogleOracleDatabaseDbSystemPropertiesDbHome Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `PutDbSystemOptions` <a name="PutDbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions"></a>

```csharp
private void PutDbSystemOptions(GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone"></a>

```csharp
private void PutTimeZone(GoogleOracleDatabaseDbSystemPropertiesTimeZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `ResetComputeModel` <a name="ResetComputeModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel"></a>

```csharp
private void ResetComputeModel()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions"></a>

```csharp
private void ResetDataCollectionOptions()
```

##### `ResetDataStorageSizeGb` <a name="ResetDataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb"></a>

```csharp
private void ResetDataStorageSizeGb()
```

##### `ResetDbHome` <a name="ResetDbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbHome"></a>

```csharp
private void ResetDbHome()
```

##### `ResetDbSystemOptions` <a name="ResetDbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions"></a>

```csharp
private void ResetDbSystemOptions()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetHostnamePrefix` <a name="ResetHostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix"></a>

```csharp
private void ResetHostnamePrefix()
```

##### `ResetMemorySizeGb` <a name="ResetMemorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb"></a>

```csharp
private void ResetMemorySizeGb()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetRecoStorageSizeGb` <a name="ResetRecoStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb"></a>

```csharp
private void ResetRecoStorageSizeGb()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHome">DbHome</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference">GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput">ComputeModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput">DatabaseEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput">DataStorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput">DbHomeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput">DbSystemOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput">InitialDataStorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput">MemorySizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput">RecoStorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb">InitialDataStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb">RecoStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference DataCollectionOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a>

---

##### `DbHome`<sup>Required</sup> <a name="DbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHome"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference DbHome { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference</a>

---

##### `DbSystemOptions`<sup>Required</sup> <a name="DbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference DbSystemOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZone"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference TimeZone { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference">GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a>

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `ComputeModelInput`<sup>Optional</sup> <a name="ComputeModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput"></a>

```csharp
public string ComputeModelInput { get; }
```

- *Type:* string

---

##### `DatabaseEditionInput`<sup>Optional</sup> <a name="DatabaseEditionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput"></a>

```csharp
public string DatabaseEditionInput { get; }
```

- *Type:* string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions DataCollectionOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `DataStorageSizeGbInput`<sup>Optional</sup> <a name="DataStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```csharp
public double DataStorageSizeGbInput { get; }
```

- *Type:* double

---

##### `DbHomeInput`<sup>Optional</sup> <a name="DbHomeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbHome DbHomeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `DbSystemOptionsInput`<sup>Optional</sup> <a name="DbSystemOptionsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions DbSystemOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput"></a>

```csharp
public string HostnamePrefixInput { get; }
```

- *Type:* string

---

##### `InitialDataStorageSizeGbInput`<sup>Optional</sup> <a name="InitialDataStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput"></a>

```csharp
public double InitialDataStorageSizeGbInput { get; }
```

- *Type:* double

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `MemorySizeGbInput`<sup>Optional</sup> <a name="MemorySizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput"></a>

```csharp
public double MemorySizeGbInput { get; }
```

- *Type:* double

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `RecoStorageSizeGbInput`<sup>Optional</sup> <a name="RecoStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput"></a>

```csharp
public double RecoStorageSizeGbInput { get; }
```

- *Type:* double

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesTimeZone TimeZoneInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DataStorageSizeGb`<sup>Required</sup> <a name="DataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb"></a>

```csharp
public double DataStorageSizeGb { get; }
```

- *Type:* double

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; }
```

- *Type:* string

---

##### `InitialDataStorageSizeGb`<sup>Required</sup> <a name="InitialDataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb"></a>

```csharp
public double InitialDataStorageSizeGb { get; }
```

- *Type:* double

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `RecoStorageSizeGb`<sup>Required</sup> <a name="RecoStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb"></a>

```csharp
public double RecoStorageSizeGb { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---


### GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseDbSystemPropertiesTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---


### GoogleOracleDatabaseDbSystemTimeoutsOutputReference <a name="GoogleOracleDatabaseDbSystemTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseDbSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleOracleDatabaseDbSystemTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

---



