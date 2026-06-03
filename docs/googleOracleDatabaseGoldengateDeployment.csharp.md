# `googleOracleDatabaseGoldengateDeployment` Submodule <a name="`googleOracleDatabaseGoldengateDeployment` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseGoldengateDeployment <a name="GoogleOracleDatabaseGoldengateDeployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment google_oracle_database_goldengate_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeployment(Construct Scope, string Id, GoogleOracleDatabaseGoldengateDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig">GoogleOracleDatabaseGoldengateDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig">GoogleOracleDatabaseGoldengateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putProperties"></a>

```csharp
private void PutProperties(GoogleOracleDatabaseGoldengateDeploymentProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleOracleDatabaseGoldengateDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetOdbNetwork"></a>

```csharp
private void ResetOdbNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseGoldengateDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseGoldengateDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseGoldengateDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseGoldengateDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleOracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseGoldengateDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseGoldengateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseGoldengateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference">GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput">GoldengateDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentId">GoldengateDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.properties"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference">GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `GoldengateDeploymentIdInput`<sup>Optional</sup> <a name="GoldengateDeploymentIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput"></a>

```csharp
public string GoldengateDeploymentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetworkInput"></a>

```csharp
public string OdbNetworkInput { get; }
```

- *Type:* string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnetInput"></a>

```csharp
public string OdbSubnetInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.propertiesInput"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleOracleDatabaseGoldengateDeploymentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `GoldengateDeploymentId`<sup>Required</sup> <a name="GoldengateDeploymentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.goldengateDeploymentId"></a>

```csharp
public string GoldengateDeploymentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; }
```

- *Type:* string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseGoldengateDeploymentConfig <a name="GoogleOracleDatabaseGoldengateDeploymentConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string GoldengateDeploymentId,
    string Location,
    string OdbSubnet,
    GoogleOracleDatabaseGoldengateDeploymentProperties Properties,
    string DeletionPolicy = null,
    string GcpOracleZone = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string OdbNetwork = null,
    string Project = null,
    GoogleOracleDatabaseGoldengateDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId">GoldengateDeploymentId</a></code> | <code>string</code> | The ID of the GoldengateDeployment to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where Oracle GoldengateDeployment is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#id GoogleOracleDatabaseGoldengateDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels or tags associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | The name of the OdbNetwork associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#project GoogleOracleDatabaseGoldengateDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#display_name GoogleOracleDatabaseGoldengateDeployment#display_name}

---

##### `GoldengateDeploymentId`<sup>Required</sup> <a name="GoldengateDeploymentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId"></a>

```csharp
public string GoldengateDeploymentId { get; set; }
```

- *Type:* string

The ID of the GoldengateDeployment to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#goldengate_deployment_id GoogleOracleDatabaseGoldengateDeployment#goldengate_deployment_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#location GoogleOracleDatabaseGoldengateDeployment#location}

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; set; }
```

- *Type:* string

The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#odb_subnet GoogleOracleDatabaseGoldengateDeployment#odb_subnet}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.properties"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#properties GoogleOracleDatabaseGoldengateDeployment#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#deletion_policy GoogleOracleDatabaseGoldengateDeployment#deletion_policy}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

The GCP Oracle zone where Oracle GoldengateDeployment is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#gcp_oracle_zone GoogleOracleDatabaseGoldengateDeployment#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#id GoogleOracleDatabaseGoldengateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels or tags associated with the GoldengateDeployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#labels GoogleOracleDatabaseGoldengateDeployment#labels}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; set; }
```

- *Type:* string

The name of the OdbNetwork associated with the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#odb_network GoogleOracleDatabaseGoldengateDeployment#odb_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#project GoogleOracleDatabaseGoldengateDeployment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentConfig.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#timeouts GoogleOracleDatabaseGoldengateDeployment#timeouts}

---

### GoogleOracleDatabaseGoldengateDeploymentProperties <a name="GoogleOracleDatabaseGoldengateDeploymentProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentProperties {
    string DeploymentType,
    GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData OggData,
    GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule BackupSchedule = null,
    double CpuCoreCount = null,
    GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData DeploymentDiagnosticData = null,
    string Description = null,
    string EnvironmentType = null,
    bool|IResolvable IsAutoScalingEnabled = null,
    string LicenseModel = null,
    GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig MaintenanceConfig = null,
    GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow MaintenanceWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentType">DeploymentType</a></code> | <code>string</code> | A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.oggData">OggData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | ogg_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.backupSchedule">BackupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | The Minimum number of OCPUs to be made available for this Deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData">DeploymentDiagnosticData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | deployment_diagnostic_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.description">Description</a></code> | <code>string</code> | The description of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.environmentType">EnvironmentType</a></code> | <code>string</code> | The environment type of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if auto scaling is enabled for the Deployment's CPU core count. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.licenseModel">LicenseModel</a></code> | <code>string</code> | The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig">MaintenanceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | maintenance_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | maintenance_window block. |

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#deployment_type GoogleOracleDatabaseGoldengateDeployment#deployment_type}

---

##### `OggData`<sup>Required</sup> <a name="OggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.oggData"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData OggData { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#ogg_data GoogleOracleDatabaseGoldengateDeployment#ogg_data}

---

##### `BackupSchedule`<sup>Optional</sup> <a name="BackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.backupSchedule"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule BackupSchedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#backup_schedule GoogleOracleDatabaseGoldengateDeployment#backup_schedule}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

The Minimum number of OCPUs to be made available for this Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#cpu_core_count GoogleOracleDatabaseGoldengateDeployment#cpu_core_count}

---

##### `DeploymentDiagnosticData`<sup>Optional</sup> <a name="DeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData DeploymentDiagnosticData { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

deployment_diagnostic_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#deployment_diagnostic_data GoogleOracleDatabaseGoldengateDeployment#deployment_diagnostic_data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#description GoogleOracleDatabaseGoldengateDeployment#description}

---

##### `EnvironmentType`<sup>Optional</sup> <a name="EnvironmentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.environmentType"></a>

```csharp
public string EnvironmentType { get; set; }
```

- *Type:* string

The environment type of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#environment_type GoogleOracleDatabaseGoldengateDeployment#environment_type}

---

##### `IsAutoScalingEnabled`<sup>Optional</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled"></a>

```csharp
public bool|IResolvable IsAutoScalingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if auto scaling is enabled for the Deployment's CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#is_auto_scaling_enabled GoogleOracleDatabaseGoldengateDeployment#is_auto_scaling_enabled}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#license_model GoogleOracleDatabaseGoldengateDeployment#license_model}

---

##### `MaintenanceConfig`<sup>Optional</sup> <a name="MaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig MaintenanceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#maintenance_config GoogleOracleDatabaseGoldengateDeployment#maintenance_config}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#maintenance_window GoogleOracleDatabaseGoldengateDeployment#maintenance_window}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule {

};
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData {

};
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps {

};
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks {

};
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig {
    double BundleReleaseUpgradePeriodDays = null,
    double InterimReleaseUpgradePeriodDays = null,
    bool|IResolvable IsInterimReleaseAutoUpgradeEnabled = null,
    double MajorReleaseUpgradePeriodDays = null,
    double SecurityPatchUpgradePeriodDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays">BundleReleaseUpgradePeriodDays</a></code> | <code>double</code> | Defines auto upgrade period for bundle releases. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays">InterimReleaseUpgradePeriodDays</a></code> | <code>double</code> | Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled">IsInterimReleaseAutoUpgradeEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default auto upgrade for interim releases are not enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays">MajorReleaseUpgradePeriodDays</a></code> | <code>double</code> | Defines auto upgrade period for major releases. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays">SecurityPatchUpgradePeriodDays</a></code> | <code>double</code> | Defines auto upgrade period for releases with security fix. |

---

##### `BundleReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="BundleReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays"></a>

```csharp
public double BundleReleaseUpgradePeriodDays { get; set; }
```

- *Type:* double

Defines auto upgrade period for bundle releases.

Manually configured period
cannot be longer than service defined period for bundle releases. This
period must be shorter or equal to major release upgrade period. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#bundle_release_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#bundle_release_upgrade_period_days}

---

##### `InterimReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="InterimReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays"></a>

```csharp
public double InterimReleaseUpgradePeriodDays { get; set; }
```

- *Type:* double

Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#interim_release_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#interim_release_upgrade_period_days}

---

##### `IsInterimReleaseAutoUpgradeEnabled`<sup>Optional</sup> <a name="IsInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled"></a>

```csharp
public bool|IResolvable IsInterimReleaseAutoUpgradeEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default auto upgrade for interim releases are not enabled.

If
auto-upgrade is enabled for interim release,  you have to specify
interim_release_upgrade_period_days too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#is_interim_release_auto_upgrade_enabled GoogleOracleDatabaseGoldengateDeployment#is_interim_release_auto_upgrade_enabled}

---

##### `MajorReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="MajorReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays"></a>

```csharp
public double MajorReleaseUpgradePeriodDays { get; set; }
```

- *Type:* double

Defines auto upgrade period for major releases.

Manually configured period
cannot be longer than service defined period for major releases. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#major_release_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#major_release_upgrade_period_days}

---

##### `SecurityPatchUpgradePeriodDays`<sup>Optional</sup> <a name="SecurityPatchUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays"></a>

```csharp
public double SecurityPatchUpgradePeriodDays { get; set; }
```

- *Type:* double

Defines auto upgrade period for releases with security fix.

Manually
configured period cannot be longer than service defined period for security
releases. Not passing this field during create will equate to using the
service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#security_patch_upgrade_period_days GoogleOracleDatabaseGoldengateDeployment#security_patch_upgrade_period_days}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow {
    string Day,
    double StartHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day">Day</a></code> | <code>string</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour">StartHour</a></code> | <code>double</code> | Start hour for maintenance period. Hour is in UTC. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#day GoogleOracleDatabaseGoldengateDeployment#day}

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour"></a>

```csharp
public double StartHour { get; set; }
```

- *Type:* double

Start hour for maintenance period. Hour is in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#start_hour GoogleOracleDatabaseGoldengateDeployment#start_hour}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData {
    string AdminUsername,
    string Deployment,
    string AdminPassword = null,
    string AdminPasswordSecretVersion = null,
    GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping GroupRolesMapping = null,
    string OggVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername">AdminUsername</a></code> | <code>string</code> | The Goldengate deployment console username. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment">Deployment</a></code> | <code>string</code> | The name given to the Goldengate service deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword">AdminPassword</a></code> | <code>string</code> | The Goldengate deployment console password in plain text. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion">AdminPasswordSecretVersion</a></code> | <code>string</code> | Input only. The Goldengate deployment console password secret version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping">GroupRolesMapping</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | group_roles_mapping block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion">OggVersion</a></code> | <code>string</code> | Version of OGG. |

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

The Goldengate deployment console username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#admin_username GoogleOracleDatabaseGoldengateDeployment#admin_username}

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment"></a>

```csharp
public string Deployment { get; set; }
```

- *Type:* string

The name given to the Goldengate service deployment.

The name must be 1 to
32 characters long, must contain only alphanumeric characters and must
start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#deployment GoogleOracleDatabaseGoldengateDeployment#deployment}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

The Goldengate deployment console password in plain text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#admin_password GoogleOracleDatabaseGoldengateDeployment#admin_password}

---

##### `AdminPasswordSecretVersion`<sup>Optional</sup> <a name="AdminPasswordSecretVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion"></a>

```csharp
public string AdminPasswordSecretVersion { get; set; }
```

- *Type:* string

Input only. The Goldengate deployment console password secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#admin_password_secret_version GoogleOracleDatabaseGoldengateDeployment#admin_password_secret_version}

---

##### `GroupRolesMapping`<sup>Optional</sup> <a name="GroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping GroupRolesMapping { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

group_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#group_roles_mapping GoogleOracleDatabaseGoldengateDeployment#group_roles_mapping}

---

##### `OggVersion`<sup>Optional</sup> <a name="OggVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion"></a>

```csharp
public string OggVersion { get; set; }
```

- *Type:* string

Version of OGG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#ogg_version GoogleOracleDatabaseGoldengateDeployment#ogg_version}

---

### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping {

};
```


### GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements {

};
```


### GoogleOracleDatabaseGoldengateDeploymentTimeouts <a name="GoogleOracleDatabaseGoldengateDeploymentTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#create GoogleOracleDatabaseGoldengateDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#delete GoogleOracleDatabaseGoldengateDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#update GoogleOracleDatabaseGoldengateDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#create GoogleOracleDatabaseGoldengateDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#delete GoogleOracleDatabaseGoldengateDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_goldengate_deployment#update GoogleOracleDatabaseGoldengateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime">BackupScheduledTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled">FrequencyBackupScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly">MetadataOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupScheduledTime`<sup>Required</sup> <a name="BackupScheduledTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime"></a>

```csharp
public string BackupScheduledTime { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `FrequencyBackupScheduled`<sup>Required</sup> <a name="FrequencyBackupScheduled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled"></a>

```csharp
public string FrequencyBackupScheduled { get; }
```

- *Type:* string

---

##### `MetadataOnly`<sup>Required</sup> <a name="MetadataOnly" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly"></a>

```csharp
public IResolvable MetadataOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime">DiagnosticEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime">DiagnosticStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState">DiagnosticState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DiagnosticEndTime`<sup>Required</sup> <a name="DiagnosticEndTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime"></a>

```csharp
public string DiagnosticEndTime { get; }
```

- *Type:* string

---

##### `DiagnosticStartTime`<sup>Required</sup> <a name="DiagnosticStartTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime"></a>

```csharp
public string DiagnosticStartTime { get; }
```

- *Type:* string

---

##### `DiagnosticState`<sup>Required</sup> <a name="DiagnosticState" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```csharp
public string DiagnosticState { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get"></a>

```csharp
private GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress">IngressIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressIpAddress`<sup>Required</sup> <a name="IngressIpAddress" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress"></a>

```csharp
public string IngressIpAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIps</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.get"></a>

```csharp
private GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocks</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays">ResetBundleReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays">ResetInterimReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">ResetIsInterimReleaseAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays">ResetMajorReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays">ResetSecurityPatchUpgradePeriodDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBundleReleaseUpgradePeriodDays` <a name="ResetBundleReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays"></a>

```csharp
private void ResetBundleReleaseUpgradePeriodDays()
```

##### `ResetInterimReleaseUpgradePeriodDays` <a name="ResetInterimReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays"></a>

```csharp
private void ResetInterimReleaseUpgradePeriodDays()
```

##### `ResetIsInterimReleaseAutoUpgradeEnabled` <a name="ResetIsInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```csharp
private void ResetIsInterimReleaseAutoUpgradeEnabled()
```

##### `ResetMajorReleaseUpgradePeriodDays` <a name="ResetMajorReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays"></a>

```csharp
private void ResetMajorReleaseUpgradePeriodDays()
```

##### `ResetSecurityPatchUpgradePeriodDays` <a name="ResetSecurityPatchUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays"></a>

```csharp
private void ResetSecurityPatchUpgradePeriodDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput">BundleReleaseUpgradePeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput">InterimReleaseUpgradePeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">IsInterimReleaseAutoUpgradeEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput">MajorReleaseUpgradePeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput">SecurityPatchUpgradePeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays">BundleReleaseUpgradePeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays">InterimReleaseUpgradePeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled">IsInterimReleaseAutoUpgradeEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays">MajorReleaseUpgradePeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays">SecurityPatchUpgradePeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BundleReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="BundleReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput"></a>

```csharp
public double BundleReleaseUpgradePeriodDaysInput { get; }
```

- *Type:* double

---

##### `InterimReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="InterimReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput"></a>

```csharp
public double InterimReleaseUpgradePeriodDaysInput { get; }
```

- *Type:* double

---

##### `IsInterimReleaseAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="IsInterimReleaseAutoUpgradeEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```csharp
public bool|IResolvable IsInterimReleaseAutoUpgradeEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MajorReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="MajorReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput"></a>

```csharp
public double MajorReleaseUpgradePeriodDaysInput { get; }
```

- *Type:* double

---

##### `SecurityPatchUpgradePeriodDaysInput`<sup>Optional</sup> <a name="SecurityPatchUpgradePeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput"></a>

```csharp
public double SecurityPatchUpgradePeriodDaysInput { get; }
```

- *Type:* double

---

##### `BundleReleaseUpgradePeriodDays`<sup>Required</sup> <a name="BundleReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays"></a>

```csharp
public double BundleReleaseUpgradePeriodDays { get; }
```

- *Type:* double

---

##### `InterimReleaseUpgradePeriodDays`<sup>Required</sup> <a name="InterimReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays"></a>

```csharp
public double InterimReleaseUpgradePeriodDays { get; }
```

- *Type:* double

---

##### `IsInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="IsInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```csharp
public bool|IResolvable IsInterimReleaseAutoUpgradeEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MajorReleaseUpgradePeriodDays`<sup>Required</sup> <a name="MajorReleaseUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays"></a>

```csharp
public double MajorReleaseUpgradePeriodDays { get; }
```

- *Type:* double

---

##### `SecurityPatchUpgradePeriodDays`<sup>Required</sup> <a name="SecurityPatchUpgradePeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays"></a>

```csharp
public double SecurityPatchUpgradePeriodDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput">StartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour">StartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput"></a>

```csharp
public double StartHourInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour"></a>

```csharp
public double StartHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId">AdministratorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId">OperatorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdministratorGroupId`<sup>Required</sup> <a name="AdministratorGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId"></a>

```csharp
public string AdministratorGroupId { get; }
```

- *Type:* string

---

##### `OperatorGroupId`<sup>Required</sup> <a name="OperatorGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId"></a>

```csharp
public string OperatorGroupId { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping">PutGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion">ResetAdminPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping">ResetGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion">ResetOggVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupRolesMapping` <a name="PutGroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping"></a>

```csharp
private void PutGroupRolesMapping(GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminPasswordSecretVersion` <a name="ResetAdminPasswordSecretVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion"></a>

```csharp
private void ResetAdminPasswordSecretVersion()
```

##### `ResetGroupRolesMapping` <a name="ResetGroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping"></a>

```csharp
private void ResetGroupRolesMapping()
```

##### `ResetOggVersion` <a name="ResetOggVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion"></a>

```csharp
private void ResetOggVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore">CredentialStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping">GroupRolesMapping</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId">IdentityDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput">AdminPasswordSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput">DeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput">GroupRolesMappingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput">OggVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion">AdminPasswordSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment">Deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CredentialStore`<sup>Required</sup> <a name="CredentialStore" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore"></a>

```csharp
public string CredentialStore { get; }
```

- *Type:* string

---

##### `GroupRolesMapping`<sup>Required</sup> <a name="GroupRolesMapping" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference GroupRolesMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a>

---

##### `IdentityDomainId`<sup>Required</sup> <a name="IdentityDomainId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId"></a>

```csharp
public string IdentityDomainId { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminPasswordSecretVersionInput`<sup>Optional</sup> <a name="AdminPasswordSecretVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput"></a>

```csharp
public string AdminPasswordSecretVersionInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput"></a>

```csharp
public string DeploymentInput { get; }
```

- *Type:* string

---

##### `GroupRolesMappingInput`<sup>Optional</sup> <a name="GroupRolesMappingInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping GroupRolesMappingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---

##### `OggVersionInput`<sup>Optional</sup> <a name="OggVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput"></a>

```csharp
public string OggVersionInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminPasswordSecretVersion`<sup>Required</sup> <a name="AdminPasswordSecretVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion"></a>

```csharp
public string AdminPasswordSecretVersion { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment"></a>

```csharp
public string Deployment { get; }
```

- *Type:* string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule">PutBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData">PutDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig">PutMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData">PutOggData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule">ResetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData">ResetDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType">ResetEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled">ResetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig">ResetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupSchedule` <a name="PutBackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule"></a>

```csharp
private void PutBackupSchedule(GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---

##### `PutDeploymentDiagnosticData` <a name="PutDeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData"></a>

```csharp
private void PutDeploymentDiagnosticData(GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---

##### `PutMaintenanceConfig` <a name="PutMaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig"></a>

```csharp
private void PutMaintenanceConfig(GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---

##### `PutOggData` <a name="PutOggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData"></a>

```csharp
private void PutOggData(GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---

##### `ResetBackupSchedule` <a name="ResetBackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule"></a>

```csharp
private void ResetBackupSchedule()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount"></a>

```csharp
private void ResetCpuCoreCount()
```

##### `ResetDeploymentDiagnosticData` <a name="ResetDeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData"></a>

```csharp
private void ResetDeploymentDiagnosticData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentType` <a name="ResetEnvironmentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType"></a>

```csharp
private void ResetEnvironmentType()
```

##### `ResetIsAutoScalingEnabled` <a name="ResetIsAutoScalingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```csharp
private void ResetIsAutoScalingEnabled()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetMaintenanceConfig` <a name="ResetMaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig"></a>

```csharp
private void ResetMaintenanceConfig()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule">BackupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId">DeploymentBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData">DeploymentDiagnosticData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole">DeploymentRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl">DeploymentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy">Healthy</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps">IngressIps</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion">IsLatestVersion</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic">IsPublic</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded">IsStorageUtilizationLimitExceeded</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime">LastBackupScheduleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId">LoadBalancerSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks">Locks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig">MaintenanceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime">NextBackupScheduleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType">NextMaintenanceActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription">NextMaintenanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime">NextMaintenanceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData">OggData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime">OggVersionSupportEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements">Placements</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime">RoleChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes">StorageUtilizationBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime">UpgradeRequiredTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput">BackupScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput">DeploymentDiagnosticDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput">EnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput">IsAutoScalingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput">MaintenanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput">OggDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType">EnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference BackupSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `DeploymentBackupId`<sup>Required</sup> <a name="DeploymentBackupId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId"></a>

```csharp
public string DeploymentBackupId { get; }
```

- *Type:* string

---

##### `DeploymentDiagnosticData`<sup>Required</sup> <a name="DeploymentDiagnosticData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference DeploymentDiagnosticData { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a>

---

##### `DeploymentRole`<sup>Required</sup> <a name="DeploymentRole" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole"></a>

```csharp
public string DeploymentRole { get; }
```

- *Type:* string

---

##### `DeploymentUrl`<sup>Required</sup> <a name="DeploymentUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl"></a>

```csharp
public string DeploymentUrl { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy"></a>

```csharp
public IResolvable Healthy { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IngressIps`<sup>Required</sup> <a name="IngressIps" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList IngressIps { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a>

---

##### `IsLatestVersion`<sup>Required</sup> <a name="IsLatestVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion"></a>

```csharp
public IResolvable IsLatestVersion { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic"></a>

```csharp
public IResolvable IsPublic { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="IsStorageUtilizationLimitExceeded" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded"></a>

```csharp
public IResolvable IsStorageUtilizationLimitExceeded { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastBackupScheduleTime`<sup>Required</sup> <a name="LastBackupScheduleTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime"></a>

```csharp
public string LastBackupScheduleTime { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `LoadBalancerSubnetId`<sup>Required</sup> <a name="LoadBalancerSubnetId" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId"></a>

```csharp
public string LoadBalancerSubnetId { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList Locks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList">GoogleOracleDatabaseGoldengateDeploymentPropertiesLocksList</a>

---

##### `MaintenanceConfig`<sup>Required</sup> <a name="MaintenanceConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference MaintenanceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a>

---

##### `NextBackupScheduleTime`<sup>Required</sup> <a name="NextBackupScheduleTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime"></a>

```csharp
public string NextBackupScheduleTime { get; }
```

- *Type:* string

---

##### `NextMaintenanceActionType`<sup>Required</sup> <a name="NextMaintenanceActionType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType"></a>

```csharp
public string NextMaintenanceActionType { get; }
```

- *Type:* string

---

##### `NextMaintenanceDescription`<sup>Required</sup> <a name="NextMaintenanceDescription" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription"></a>

```csharp
public string NextMaintenanceDescription { get; }
```

- *Type:* string

---

##### `NextMaintenanceTime`<sup>Required</sup> <a name="NextMaintenanceTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime"></a>

```csharp
public string NextMaintenanceTime { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OggData`<sup>Required</sup> <a name="OggData" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference OggData { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a>

---

##### `OggVersionSupportEndTime`<sup>Required</sup> <a name="OggVersionSupportEndTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime"></a>

```csharp
public string OggVersionSupportEndTime { get; }
```

- *Type:* string

---

##### `Placements`<sup>Required</sup> <a name="Placements" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList Placements { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `RoleChangeTime`<sup>Required</sup> <a name="RoleChangeTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime"></a>

```csharp
public string RoleChangeTime { get; }
```

- *Type:* string

---

##### `StorageUtilizationBytes`<sup>Required</sup> <a name="StorageUtilizationBytes" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes"></a>

```csharp
public string StorageUtilizationBytes { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UpgradeRequiredTime`<sup>Required</sup> <a name="UpgradeRequiredTime" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime"></a>

```csharp
public string UpgradeRequiredTime { get; }
```

- *Type:* string

---

##### `BackupScheduleInput`<sup>Optional</sup> <a name="BackupScheduleInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule BackupScheduleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">GoogleOracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `DeploymentDiagnosticDataInput`<sup>Optional</sup> <a name="DeploymentDiagnosticDataInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData DeploymentDiagnosticDataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">GoogleOracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentTypeInput`<sup>Optional</sup> <a name="EnvironmentTypeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput"></a>

```csharp
public string EnvironmentTypeInput { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```csharp
public bool|IResolvable IsAutoScalingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `MaintenanceConfigInput`<sup>Optional</sup> <a name="MaintenanceConfigInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig MaintenanceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">GoogleOracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---

##### `OggDataInput`<sup>Optional</sup> <a name="OggDataInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData OggDataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData">GoogleOracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType"></a>

```csharp
public string EnvironmentType { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public bool|IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentProperties">GoogleOracleDatabaseGoldengateDeploymentProperties</a>

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get"></a>

```csharp
private GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements">GoogleOracleDatabaseGoldengateDeploymentPropertiesPlacements</a>

---


### GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference <a name="GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleOracleDatabaseGoldengateDeploymentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseGoldengateDeployment.GoogleOracleDatabaseGoldengateDeploymentTimeouts">GoogleOracleDatabaseGoldengateDeploymentTimeouts</a>

---



