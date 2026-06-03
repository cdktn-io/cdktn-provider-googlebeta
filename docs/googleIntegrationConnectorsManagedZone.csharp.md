# `googleIntegrationConnectorsManagedZone` Submodule <a name="`googleIntegrationConnectorsManagedZone` Submodule" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationConnectorsManagedZone <a name="GoogleIntegrationConnectorsManagedZone" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone google_integration_connectors_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZone(Construct Scope, string Id, GoogleIntegrationConnectorsManagedZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig">GoogleIntegrationConnectorsManagedZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig">GoogleIntegrationConnectorsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIntegrationConnectorsManagedZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIntegrationConnectorsManagedZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIntegrationConnectorsManagedZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIntegrationConnectorsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationConnectorsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput">DnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput">TargetVpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns">Dns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc">TargetVpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts"></a>

```csharp
public GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput"></a>

```csharp
public string DnsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `TargetVpcInput`<sup>Optional</sup> <a name="TargetVpcInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput"></a>

```csharp
public string TargetVpcInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleIntegrationConnectorsManagedZoneTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns"></a>

```csharp
public string Dns { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `TargetVpc`<sup>Required</sup> <a name="TargetVpc" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc"></a>

```csharp
public string TargetVpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationConnectorsManagedZoneConfig <a name="GoogleIntegrationConnectorsManagedZoneConfig" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZoneConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Dns,
    string Name,
    string TargetProject,
    string TargetVpc,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleIntegrationConnectorsManagedZoneTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns">Dns</a></code> | <code>string</code> | DNS Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name">Name</a></code> | <code>string</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject">TargetProject</a></code> | <code>string</code> | The name of the Target Project. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc">TargetVpc</a></code> | <code>string</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description">Description</a></code> | <code>string</code> | Description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns"></a>

```csharp
public string Dns { get; set; }
```

- *Type:* string

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#dns GoogleIntegrationConnectorsManagedZone#dns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#name GoogleIntegrationConnectorsManagedZone#name}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#target_project GoogleIntegrationConnectorsManagedZone#target_project}

---

##### `TargetVpc`<sup>Required</sup> <a name="TargetVpc" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc"></a>

```csharp
public string TargetVpc { get; set; }
```

- *Type:* string

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#target_vpc GoogleIntegrationConnectorsManagedZone#target_vpc}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#deletion_policy GoogleIntegrationConnectorsManagedZone#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#description GoogleIntegrationConnectorsManagedZone#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#labels GoogleIntegrationConnectorsManagedZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts"></a>

```csharp
public GoogleIntegrationConnectorsManagedZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#timeouts GoogleIntegrationConnectorsManagedZone#timeouts}

---

### GoogleIntegrationConnectorsManagedZoneTimeouts <a name="GoogleIntegrationConnectorsManagedZoneTimeouts" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference <a name="GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIntegrationConnectorsManagedZoneTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

---



