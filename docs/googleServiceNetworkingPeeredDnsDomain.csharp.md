# `googleServiceNetworkingPeeredDnsDomain` Submodule <a name="`googleServiceNetworkingPeeredDnsDomain` Submodule" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceNetworkingPeeredDnsDomain <a name="GoogleServiceNetworkingPeeredDnsDomain" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceNetworkingPeeredDnsDomain(Construct Scope, string Id, GoogleServiceNetworkingPeeredDnsDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig">GoogleServiceNetworkingPeeredDnsDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig">GoogleServiceNetworkingPeeredDnsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleServiceNetworkingPeeredDnsDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceNetworkingPeeredDnsDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceNetworkingPeeredDnsDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceNetworkingPeeredDnsDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleServiceNetworkingPeeredDnsDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleServiceNetworkingPeeredDnsDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleServiceNetworkingPeeredDnsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleServiceNetworkingPeeredDnsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput">DnsSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix">DnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeouts"></a>

```csharp
public GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DnsSuffixInput`<sup>Optional</sup> <a name="DnsSuffixInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput"></a>

```csharp
public string DnsSuffixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleServiceNetworkingPeeredDnsDomainTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```csharp
public string DnsSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceNetworkingPeeredDnsDomainConfig <a name="GoogleServiceNetworkingPeeredDnsDomainConfig" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceNetworkingPeeredDnsDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DnsSuffix,
    string Name,
    string Network,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    string Service = null,
    GoogleServiceNetworkingPeeredDnsDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix">DnsSuffix</a></code> | <code>string</code> | The DNS domain name suffix of the peered DNS domain. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.name">Name</a></code> | <code>string</code> | Name of the peered DNS domain. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.network">Network</a></code> | <code>string</code> | Network in the consumer project to peer with. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#id GoogleServiceNetworkingPeeredDnsDomain#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.service">Service</a></code> | <code>string</code> | The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix"></a>

```csharp
public string DnsSuffix { get; set; }
```

- *Type:* string

The DNS domain name suffix of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#dns_suffix GoogleServiceNetworkingPeeredDnsDomain#dns_suffix}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#name GoogleServiceNetworkingPeeredDnsDomain#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Network in the consumer project to peer with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#network GoogleServiceNetworkingPeeredDnsDomain#network}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#deletion_policy GoogleServiceNetworkingPeeredDnsDomain#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#id GoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#project GoogleServiceNetworkingPeeredDnsDomain#project}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#service GoogleServiceNetworkingPeeredDnsDomain#service}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainConfig.property.timeouts"></a>

```csharp
public GoogleServiceNetworkingPeeredDnsDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#timeouts GoogleServiceNetworkingPeeredDnsDomain#timeouts}

---

### GoogleServiceNetworkingPeeredDnsDomainTimeouts <a name="GoogleServiceNetworkingPeeredDnsDomainTimeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceNetworkingPeeredDnsDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#create GoogleServiceNetworkingPeeredDnsDomain#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#delete GoogleServiceNetworkingPeeredDnsDomain#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#read GoogleServiceNetworkingPeeredDnsDomain#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#create GoogleServiceNetworkingPeeredDnsDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#delete GoogleServiceNetworkingPeeredDnsDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_peered_dns_domain#read GoogleServiceNetworkingPeeredDnsDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference <a name="GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleServiceNetworkingPeeredDnsDomainTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingPeeredDnsDomain.GoogleServiceNetworkingPeeredDnsDomainTimeouts">GoogleServiceNetworkingPeeredDnsDomainTimeouts</a>

---



