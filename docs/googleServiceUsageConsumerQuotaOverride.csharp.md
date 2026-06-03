# `googleServiceUsageConsumerQuotaOverride` Submodule <a name="`googleServiceUsageConsumerQuotaOverride` Submodule" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceUsageConsumerQuotaOverride <a name="GoogleServiceUsageConsumerQuotaOverride" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override google_service_usage_consumer_quota_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceUsageConsumerQuotaOverride(Construct Scope, string Id, GoogleServiceUsageConsumerQuotaOverrideConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig">GoogleServiceUsageConsumerQuotaOverrideConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig">GoogleServiceUsageConsumerQuotaOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleServiceUsageConsumerQuotaOverrideTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetForce"></a>

```csharp
private void ResetForce()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceUsageConsumerQuotaOverride.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceUsageConsumerQuotaOverride.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceUsageConsumerQuotaOverride.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceUsageConsumerQuotaOverride.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleServiceUsageConsumerQuotaOverride to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleServiceUsageConsumerQuotaOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleServiceUsageConsumerQuotaOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput">ForceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput">LimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput">OverrideValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit">Limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue">OverrideValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeouts"></a>

```csharp
public GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference">GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.forceInput"></a>

```csharp
public bool|IResolvable ForceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limitInput"></a>

```csharp
public string LimitInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `OverrideValueInput`<sup>Optional</sup> <a name="OverrideValueInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValueInput"></a>

```csharp
public string OverrideValueInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleServiceUsageConsumerQuotaOverrideTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.force"></a>

```csharp
public bool|IResolvable Force { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.limit"></a>

```csharp
public string Limit { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `OverrideValue`<sup>Required</sup> <a name="OverrideValue" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.overrideValue"></a>

```csharp
public string OverrideValue { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverride.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceUsageConsumerQuotaOverrideConfig <a name="GoogleServiceUsageConsumerQuotaOverrideConfig" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceUsageConsumerQuotaOverrideConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Limit,
    string Metric,
    string OverrideValue,
    string Service,
    string DeletionPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    bool|IResolvable Force = null,
    string Id = null,
    string Project = null,
    GoogleServiceUsageConsumerQuotaOverrideTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit">Limit</a></code> | <code>string</code> | The limit on the metric, e.g. '/project/region'. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric">Metric</a></code> | <code>string</code> | The metric that should be limited, e.g. 'compute.googleapis.com/cpus'. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue">OverrideValue</a></code> | <code>string</code> | The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service">Service</a></code> | <code>string</code> | The service that the metrics belong to, e.g. 'compute.googleapis.com'. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If the new quota would decrease the existing quota by more than 10%, the request is rejected. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.limit"></a>

```csharp
public string Limit { get; set; }
```

- *Type:* string

The limit on the metric, e.g. '/project/region'.

~> Make sure that 'limit' is in a format that doesn't start with '1/' or contain curly braces.
E.g. use '/project/user' instead of '1/{project}/{user}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#limit GoogleServiceUsageConsumerQuotaOverride#limit}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#metric GoogleServiceUsageConsumerQuotaOverride#metric}

---

##### `OverrideValue`<sup>Required</sup> <a name="OverrideValue" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.overrideValue"></a>

```csharp
public string OverrideValue { get; set; }
```

- *Type:* string

The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#override_value GoogleServiceUsageConsumerQuotaOverride#override_value}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service that the metrics belong to, e.g. 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#service GoogleServiceUsageConsumerQuotaOverride#service}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#deletion_policy GoogleServiceUsageConsumerQuotaOverride#deletion_policy}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#dimensions GoogleServiceUsageConsumerQuotaOverride#dimensions}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.force"></a>

```csharp
public bool|IResolvable Force { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If the new quota would decrease the existing quota by more than 10%, the request is rejected.

If 'force' is 'true', that safety check is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#force GoogleServiceUsageConsumerQuotaOverride#force}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideConfig.property.timeouts"></a>

```csharp
public GoogleServiceUsageConsumerQuotaOverrideTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#timeouts GoogleServiceUsageConsumerQuotaOverride#timeouts}

---

### GoogleServiceUsageConsumerQuotaOverrideTimeouts <a name="GoogleServiceUsageConsumerQuotaOverrideTimeouts" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceUsageConsumerQuotaOverrideTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference <a name="GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleServiceUsageConsumerQuotaOverrideTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceUsageConsumerQuotaOverride.GoogleServiceUsageConsumerQuotaOverrideTimeouts">GoogleServiceUsageConsumerQuotaOverrideTimeouts</a>

---



