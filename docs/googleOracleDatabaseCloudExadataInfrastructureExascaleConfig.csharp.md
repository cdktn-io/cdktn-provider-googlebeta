# `googleOracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule <a name="`googleOracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config google_oracle_database_cloud_exadata_infrastructure_exascale_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig(Construct Scope, string Id, GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput">CloudExadataInfrastructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput">TotalStorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure">CloudExadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a>

---

##### `CloudExadataInfrastructureInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput"></a>

```csharp
public string CloudExadataInfrastructureInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---

##### `TotalStorageSizeGbInput`<sup>Optional</sup> <a name="TotalStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput"></a>

```csharp
public double TotalStorageSizeGbInput { get; }
```

- *Type:* double

---

##### `CloudExadataInfrastructure`<sup>Required</sup> <a name="CloudExadataInfrastructure" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure"></a>

```csharp
public string CloudExadataInfrastructure { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TotalStorageSizeGb`<sup>Required</sup> <a name="TotalStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb"></a>

```csharp
public double TotalStorageSizeGb { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CloudExadataInfrastructure,
    string Location,
    double TotalStorageSizeGb,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure">CloudExadataInfrastructure</a></code> | <code>string</code> | A reference to CloudExadataInfrastructure resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#location GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>double</code> | The total storage to be allocated to Exascale in GBs. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#id GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#project GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudExadataInfrastructure`<sup>Required</sup> <a name="CloudExadataInfrastructure" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure"></a>

```csharp
public string CloudExadataInfrastructure { get; set; }
```

- *Type:* string

A reference to CloudExadataInfrastructure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#cloud_exadata_infrastructure GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#cloud_exadata_infrastructure}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#location GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#location}.

---

##### `TotalStorageSizeGb`<sup>Required</sup> <a name="TotalStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb"></a>

```csharp
public double TotalStorageSizeGb { get; set; }
```

- *Type:* double

The total storage to be allocated to Exascale in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#total_storage_size_gb GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#total_storage_size_gb}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#deletion_policy GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#id GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#project GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#timeouts GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#timeouts}

---

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#create GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#delete GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#create GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#delete GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---



